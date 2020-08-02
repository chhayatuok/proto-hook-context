import React, {createContext, useState, useContext} from 'react'
import { v4 } from 'uuid' //Random Id generator

//Tutorial URL: https://dev.to/oohsinan/creating-a-todo-list-app-with-react-using-hooks-and-contexts-564g

//Creating a context
const TaskContext = createContext()
//Creating a hook calling the context
export const useTasks = () => useContext(TaskContext)

export default function TaskProvider({ children }) {
  //useState is a hook, passing default value
  const [tasks, setTasks] = useState([])
  //tasks object is the value of the state
  //setTasks is a function to update state

  //Create a function to add a task.
  const addTask = task =>
    setTasks([
      ...tasks,
      {
        id: v4(),
        task,
        complete: false
      }
    ])

  //Create a function to update a tasks' status
  const setStatusTask = (id, status) => {
    setTasks(tasks.map(t => t.id === id ? {...t, complete:status} : t))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, setStatusTask }}>
      { children }
    </TaskContext.Provider>
  )
}