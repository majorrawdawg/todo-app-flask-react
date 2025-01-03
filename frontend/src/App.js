import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/api/todos`);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await fetch(`${API_URL}/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todoToToggle = todos.find(todo => todo.id === id);
      const response = await fetch(`${API_URL}/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...todoToToggle, completed: !todoToToggle.completed }),
      });
      const updatedTodo = await response.json();
      setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/api/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;