from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Todo
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_caching import Cache
from flask_migrate import Migrate
import logging
from logging.handlers import RotatingFileHandler
from marshmallow import Schema, fields, ValidationError
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Configure logging
handler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=1)
handler.setLevel(logging.INFO)
app.logger.addHandler(handler)

# Initialize the database
db.init_app(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)

# Set up rate limiting
limiter = Limiter(app, key_func=get_remote_address, default_limits=["200 per day", "50 per hour"])

# Set up caching
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

# Request validation schema
class TodoSchema(Schema):
    title = fields.Str(required=True, validate=lambda x: len(x) > 0)
    completed = fields.Bool()

todo_schema = TodoSchema()

@app.errorhandler(ValidationError)
def handle_validation_error(error):
    return jsonify(error.messages), 400

@app.route('/api/todos', methods=['GET'])
@cache.cached(timeout=60)  # Cache for 1 minute
def get_todos():
    todos = Todo.query.all()
    return jsonify([todo.to_dict() for todo in todos])

@app.route('/api/todos', methods=['POST'])
@limiter.limit("5 per minute")
def create_todo():
    try:
        data = todo_schema.load(request.json)
    except ValidationError as err:
        return jsonify(err.messages), 400

    new_todo = Todo(title=data['title'], completed=data.get('completed', False))
    db.session.add(new_todo)
    db.session.commit()
    cache.clear()  # Clear cache after modification
    return jsonify(new_todo.to_dict()), 201

@app.route('/api/todos/<int:todo_id>', methods=['PUT'])
@limiter.limit("10 per minute")
def update_todo(todo_id):
    todo = Todo.query.get_or_404(todo_id)
    try:
        data = todo_schema.load(request.json, partial=True)
    except ValidationError as err:
        return jsonify(err.messages), 400

    todo.title = data.get('title', todo.title)
    todo.completed = data.get('completed', todo.completed)
    db.session.commit()
    cache.clear()  # Clear cache after modification
    return jsonify(todo.to_dict())

@app.route('/api/todos/<int:todo_id>', methods=['DELETE'])
@limiter.limit("5 per minute")
def delete_todo(todo_id):
    todo = Todo.query.get_or_404(todo_id)
    db.session.delete(todo)
    db.session.commit()
    cache.clear()  # Clear cache after modification
    return '', 204

if __name__ == '__main__':
    app.run(debug=False)  # Set debug to False in production

app.logger.setLevel(logging.INFO)
app.logger.info('Todo app started')