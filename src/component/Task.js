import React from 'react'
import { useTasks } from './TaskProvider'

export default function Task({ id, task, complete }) {
  const { setStatusTask } = useTasks() //Extract setStatusTask from useTasks()

  const checkTask = e => setStatusTask( id, e.target.checked )

  return (
    <tr>
      <td>
        <input type="checkbox" onChange={checkTask} />
      </td>
      <td>
        <span className={ complete ? 'task-done' : ''}>{task}</span>
      </td>
    </tr>
  )
}