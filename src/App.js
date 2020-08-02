import React from 'react';
import './App.css';
import './Todo.scss'
import NewTaskForm from './component/NewTaskForm'
import TaskList from './component/TaskList'

function App() {
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
