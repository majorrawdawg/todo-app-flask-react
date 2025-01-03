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

2. Install dependencies:
   ```
   npm run install-all
   ```

3. Set up Flask environment variable:
   - On macOS/Linux:
     ```
     export FLASK_APP=backend/app.py
     ```
   - On Windows:
     ```
     set FLASK_APP=backend/app.py
     ```

## Running the Application Locally

To start both the backend and frontend concurrently:

```
npm start
```

This will start the Flask backend on `http://localhost:5000` and the React frontend on `http://localhost:3000`.

## Development

- Backend code is located in the `backend/` directory
- Frontend code is located in the `frontend/` directory

### Backend Development

To run only the backend:

```
npm run start-backend
```

### Frontend Development

To run only the frontend:

```
npm run start-frontend
```

## Testing

We use Playwright for end-to-end testing of our application and pytest for backend unit tests.

To run the frontend tests:

```
cd frontend
npm test
```

To run the backend tests:

```
cd backend
pytest
```

To view the Playwright test results in a browser:

```
npx playwright show-report
```

## Deployment to Heroku

1. Install the Heroku CLI and log in:
   ```
   heroku login
   ```

2. Create a new Heroku app:
   ```
   heroku create your-app-name
   ```

3. Add the PostgreSQL addon:
   ```
   heroku addons:create heroku-postgresql:hobby-dev
   ```

4. Set the necessary config variables:
   ```
   heroku config:set FLASK_APP=backend/app.py
   heroku config:set REACT_APP_API_URL=https://your-app-name.herokuapp.com
   ```

5. Push your code to Heroku:
   ```
   git push heroku main
   ```

6. Run database migrations:
   ```
   heroku run flask db upgrade
   ```

7. Open your deployed app:
   ```
   heroku open
   ```

## Troubleshooting

If you encounter any issues while setting up or running the application, try the following:

1. Ensure all dependencies are correctly installed for both backend and frontend.
2. Check that the FLASK_APP environment variable is set correctly.
3. Verify that ports 5000 and 3000 are not in use by other applications.
4. If you encounter issues with frontend dependencies, try removing the node_modules folder and package-lock.json file, then reinstall:
   ```
   cd frontend
   rm -rf node_modules package-lock.json
   npm install
   ```

If problems persist, please open an issue on the GitHub repository with details about the error you're encountering.

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

Last updated on 2023-05-04