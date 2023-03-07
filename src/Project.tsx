import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TasksList from './TasksList'

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const projectId = Number(id)

  const [project, setProject] = useState<{ id: number, name: string }>(
    { id: 0, name: '' }
  )

  /*
  const [tasks, setTasks] = useState<
  Array<{ id: number, name: string, state: string }>
  >([])
  */

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects') ?? ''
    const projects = JSON.parse(storedProjects)
    const project = projects.find((p: { id: number }) => p.id === projectId)

    if (project !== undefined && project !== null) {
      setProject(project)
    } else {
      console.log(`Progetto con ID ${projectId} non trovato`)
    }
  }, [])

  return (
    <div>
      <h1>siamo nella pagina progetto {project.name}</h1>
      <TasksList project={project}/>
    </div>
  )
}

export default Project
