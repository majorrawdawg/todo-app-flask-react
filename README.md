# Todo App

A full-stack Todo application with a Flask backend and React frontend.

## Features

- Create, edit, and delete tasks
- Mark tasks as complete
- Clean UI design with intuitive UX

## Tech Stack

- Backend: Python, Flask
- Frontend: React
- Database: SQLite (easily upgradable to PostgreSQL)

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

## License

This project is licensed under the MIT License.

## Acknowledgments

- Flask for the robust backend framework
- React for the powerful frontend library
- All contributors who participate in this project

---

Initialized on 2025-01-02
Last updated on [Current Date]