import React, { useState } from 'react'

interface Project {
  id: number
  name: string
}

interface TasksListProps {
  project: Project
}

// set in progress
// set on pause
// initial is slepp
// set to complete

const TasksList: React.FC<TasksListProps> = ({ project }) => {
  const [tasks, setTasks] = useState<Array<{ id: number, name: string, state: string }>>(
    []
  )
  const [errorName, setErrorName] = useState(false)
  const [newTaskName, setNewTaskName] = useState('')

  const handleNewTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value)
  }

  // add a new project
  const handleAddTask = () => {
    if (isValidNameFormat(newTaskName)) {
      const newTask = {
        id: tasks.length + 1,
        name: newTaskName,
        state: 'sleep'
      }
      const updatedTasks = [...tasks, newTask]
      setTasks(updatedTasks)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    } else setErrorName(true)
  }

  // control if state name is correct
  const isValidNameFormat = (name: string): boolean => {
    const nameRegex: RegExp = /^[a-zA-Z' ]+$/
    if (!nameRegex.test(name) ||
        name.length < 3 ||
        (name === '') ||
        name.trim().length === 0) {
      return false
    }

    return true
  }

  return (
    <div>
      <h3>Siamo nella tasklist del progetto {project.name} (ID: {project.id})</h3>
    <input type="text" value={newTaskName} onChange={handleNewTaskNameChange} />
    <button onClick={handleAddTask}>Aggiungi progetto</button>
    {errorName
      ? (
        <p style={{ color: 'red' }}>Invalid project name. Please enter a valid project name.</p>
        )
      : null}
  </div>
  )
}

export default TasksList
