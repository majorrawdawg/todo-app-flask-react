# Todo App

A full-stack Todo application with a Flask backend and React frontend, featuring a polished UI and optimized backend performance.

## Features

- Create, edit, and delete tasks
- Mark tasks as complete
- Clean, intuitive UI with subtle 3D effects
- Optimized backend for improved performance and stability

## Tech Stack

- Backend: Python, Flask
- Frontend: React
- Database: SQLite (easily upgradable to PostgreSQL)
- Additional: Flask-Limiter, Flask-Caching, Marshmallow for validation

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm 6+

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

   This command will install both backend and frontend dependencies.

## Running the Application

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

(Instructions for running tests will be added in future updates)

## Deployment

(Deployment instructions will be added in future updates)

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## For Project Developers

If you're working directly on this project repository, follow these steps to push your changes and create a pull request:

1. Ensure you're on your feature branch:
   ```
   git branch
   ```

2. Add and commit your changes if you haven't already:
   ```
   git add .
   git commit -m "Brief description of your changes"
   ```

3. Push your feature branch to the remote repository:
   ```
   git push origin feature/your-feature-name
   ```

4. Go to the GitHub repository page (https://github.com/majorrawdawg/todo-app-flask-react)

5. Click on "Pull requests" and then "New pull request"

6. Set the base branch (where you want to merge your changes) to `release/main` and the compare branch to your feature branch

7. Click "Create pull request"

8. Add a title and description for your pull request, then click "Create pull request"

9. Wait for review and merge by the project maintainers

## License

This project is licensed under the MIT License.

## Acknowledgments

- Flask for the robust backend framework
- React for the powerful frontend library
- All contributors who participate in this project

---

Initialized on 2025-01-02
Last updated on 2023-05-01