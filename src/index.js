import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaskProvider from './component/TaskProvider'

ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
);