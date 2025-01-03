import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    
    # Get the DATABASE_URL from environment variables
    DATABASE_URL = os.environ.get('DATABASE_URL')

    # If DATABASE_URL is set and starts with 'postgres://', update it to 'postgresql://'
    if DATABASE_URL and DATABASE_URL.startswith('postgres://'):
        DATABASE_URL = DATABASE_URL.replace('postgres://', 'postgresql://', 1)

    # Use DATABASE_URL if available, otherwise fall back to SQLite
    SQLALCHEMY_DATABASE_URI = DATABASE_URL or 'sqlite:///todos.db'
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False