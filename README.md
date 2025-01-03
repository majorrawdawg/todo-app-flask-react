# Todo App

A full-stack Todo application with a Flask backend and React frontend, featuring a polished UI and optimized backend performance.

## Features

- Create, edit, and delete tasks
- Mark tasks as complete
- Clean, intuitive UI with subtle 3D effects
- Optimized backend for improved performance and stability
- Comprehensive end-to-end testing with Playwright

## Tech Stack

- Backend: Python, Flask
- Frontend: React
- Database: SQLite (local), PostgreSQL (production)
- Additional: Flask-Limiter, Flask-Caching, Marshmallow for validation
- Testing: Playwright, pytest

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm 6+
- Heroku CLI (for deployment)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/majorrawdawg/todo-app-flask-react.git
   cd todo-app-flask-react
   ```

2. Install root-level dependencies:
   ```
   npm install
   ```

3. Install backend dependencies:
   ```
   cd backend
   pip install -r requirements.txt
   ```

4. Set up Flask environment variable:
   - On macOS/Linux:
     ```
     export FLASK_APP=app.py
     ```
   - On Windows:
     ```
     set FLASK_APP=app.py
     ```

5. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

## Running the Application

To start both the backend and frontend concurrently:

1. Navigate to the root directory of the project.
2. Run the following command:
   ```
   npm start
   ```
3. This will start the Flask backend on `http://localhost:5000` and the React frontend on `http://localhost:3000`.
4. Open a web browser and navigate to `http://localhost:3000` to use the Todo app.

If you encounter any issues:
- Ensure all dependencies are correctly installed.
- Check that the FLASK_APP environment variable is set correctly.
- Verify that ports 5000 and 3000 are not in use by other applications.

## Development

- Backend code is located in the `backend/` directory
- Frontend code is located in the `frontend/` directory

### Backend Development

To run only the backend:

```
cd backend
flask run
```

### Frontend Development

To run only the frontend:

```
cd frontend
npm start
```

## Backend Optimizations

- Implemented connection pooling for improved database performance
- Added rate limiting to prevent API abuse
- Implemented caching for frequently accessed data
- Added request validation using Marshmallow schemas
- Improved error handling and logging

## UI Enhancements

- Added subtle 3D effects for a more polished look
- Implemented a refined color scheme
- Improved responsiveness for various screen sizes

## Testing

We use Playwright for end-to-end testing of our application and pytest for backend unit tests.

To run the frontend tests:

1. Ensure that both the backend and frontend are running.
2. Open a new terminal and navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Run the Playwright tests:
   ```
   npm test
   ```

To run the backend tests:

1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Run pytest:
   ```
   pytest
   ```

To view the Playwright test results in a browser:

1. After running the tests, open the HTML report:
   ```
   npx playwright show-report
   ```

This will open a detailed HTML report of the test results in your default browser.

## Deployment

To deploy the Todo App to Heroku, follow these steps:

1. Sign up for a Heroku account if you haven't already (https://signup.heroku.com/).

2. Install the Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli

3. Log in to Heroku from the terminal:
   ```
   heroku login
   ```

4. Create a new Heroku app:
   ```
   heroku create your-app-name
   ```

5. Add the PostgreSQL addon to your Heroku app:
   ```
   heroku addons:create heroku-postgresql:hobby-dev
   ```

6. Set the following config variables for your Heroku app:
   ```
   heroku config:set FLASK_APP=backend/app.py
   heroku config:set REACT_APP_API_URL=https://your-app-name.herokuapp.com
   ```

7. Add a Procfile to the root directory of your project (if not already present):
   ```
   web: gunicorn --chdir backend app:app
   release: python backend/manage.py db upgrade
   ```

8. Update your package.json to include a postbuild script for the frontend:
   ```json
   "scripts": {
     ...
     "heroku-postbuild": "cd frontend && npm install && npm run build"
   }
   ```

9. Commit all changes to Git:
   ```
   git add .
   git commit -m "Prepare for Heroku deployment"
   ```

10. Push your code to Heroku:
    ```
    git push heroku main
    ```

11. Run database migrations:
    ```
    heroku run python backend/manage.py db upgrade
    ```

12. Open your deployed app:
    ```
    heroku open
    ```

Your Todo App should now be live on Heroku!

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Flask for the robust backend framework
- React for the powerful frontend library
- Playwright for comprehensive end-to-end testing
- All contributors who participate in this project

---

Last updated on 2023-05-01