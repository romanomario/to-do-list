import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProjectsList from './ProjectsList'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 200px;
  text-align: center;
  text-transform: capitalize;
`

const Home: React.FC = () => {
  const [errorName, setErrorName] = useState(false)

  const [projects, setProjects] = useState<Array<{ id: number, name: string }>>(
    []
  )

  // add a new project
  const handleAddProject = () => {
    if (isValidNameFormat(newProjectName)) {
      const newProject = {
        id: projects.length + 1,
        name: newProjectName
      }
      const updatedProjects = [...projects, newProject]
      setProjects(updatedProjects)
      localStorage.setItem('projects', JSON.stringify(updatedProjects))
    } else setErrorName(true)
  }

  // control if project name is correct
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

  const [newProjectName, setNewProjectName] = useState('')

  const handleNewProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProjectName(event.target.value)
  }

  // Elmina un progetto con l'id
  const handleDeleteProject = (id: number) => {
    const updatedProjects = projects.filter(project => project.id !== id)
    setProjects(updatedProjects)
    localStorage.setItem('projects', JSON.stringify(updatedProjects))
  }

  // TODO funzione che rinomina un progetto
  const handleRenameProject = (name: string, id: number) => {
    /*
    const projectId = 2
    const newProjectName = 'New Project Name'
    const newProjects = projects.map(project =>
      project.id === projectId ? { ...project, name: newProjectName } : project
    )
    setProjects(newProjects)
    */
  }

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects')
    if (storedProjects != null) {
      const parsedProjects = JSON.parse(storedProjects)
      setProjects(parsedProjects)
    }
  }, [])

  useEffect(() => {
    setNewProjectName('')
  }, [projects])

  return (
    <div>
      <h3>I tuoi progetti</h3>
      <ProjectsList projects={projects}
        onRenameProject={handleRenameProject}
        onDeleteProject={handleDeleteProject}
        onAddProject={handleAddProject} />
      <Button>Crea un progetto +</Button>
      <div>
        <input type="text" value={newProjectName} onChange={handleNewProjectNameChange} />
        <button onClick={handleAddProject}>Aggiungi progetto</button>
      </div>
      {errorName
        ? (
        <p style={{ color: 'red' }}>Invalid project name. Please enter a valid project name.</p>
          )
        : null}
    </div>
  )
}

export default Home
