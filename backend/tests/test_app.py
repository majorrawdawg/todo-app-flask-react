import pytest
from app import app, db
from models import Todo

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()

def test_get_todos(client):
    response = client.get('/api/todos')
    assert response.status_code == 200
    assert response.json == []

def test_create_todo(client):
    response = client.post('/api/todos', json={'title': 'Test Todo'})
    assert response.status_code == 201
    assert response.json['title'] == 'Test Todo'
    assert not response.json['completed']

def test_update_todo(client):
    # First, create a todo
    create_response = client.post('/api/todos', json={'title': 'Test Todo'})
    todo_id = create_response.json['id']

    # Then, update it
    update_response = client.put(f'/api/todos/{todo_id}', json={'title': 'Updated Todo', 'completed': True})
    assert update_response.status_code == 200
    assert update_response.json['title'] == 'Updated Todo'
    assert update_response.json['completed']

def test_delete_todo(client):
    # First, create a todo
    create_response = client.post('/api/todos', json={'title': 'Test Todo'})
    todo_id = create_response.json['id']

    # Then, delete it
    delete_response = client.delete(f'/api/todos/{todo_id}')
    assert delete_response.status_code == 204

    # Verify it's been deleted
    get_response = client.get('/api/todos')
    assert len(get_response.json) == 0

def test_get_non_existent_todo(client):
    response = client.get('/api/todos/999')
    assert response.status_code == 404

def test_update_non_existent_todo(client):
    response = client.put('/api/todos/999', json={'title': 'Updated Todo'})
    assert response.status_code == 404

def test_delete_non_existent_todo(client):
    response = client.delete('/api/todos/999')
    assert response.status_code == 404