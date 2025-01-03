# Todo App

A full-stack Todo application with a Flask backend and React frontend, featuring a polished UI and optimized backend performance.

[... keep the existing content up to the "Setup" section ...]

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

   Note: If you encounter any package version conflicts, you may need to update the versions in the requirements.txt file. The current versions have been tested and should work together, but package updates may introduce new conflicts over time.

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

   If you encounter any issues with frontend dependencies, try removing the node_modules folder and package-lock.json file before reinstalling:
   ```
   rm -rf node_modules package-lock.json
   npm install
   ```

[... keep the existing content up to the "Testing" section ...]

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
5. If you see an error related to the Limiter initialization, ensure you're using the latest version of the app.py file, which includes the corrected Limiter setup.

If problems persist, please open an issue on the GitHub repository with details about the error you're encountering.

[... keep the rest of the existing content ...]

---

Last updated on 2023-05-03