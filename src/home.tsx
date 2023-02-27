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
`

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Array<{ id: number, name: string }>>(
    []
  )
  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: newProjectName
    }
    const updatedProjects = [...projects, newProject]
    setProjects(updatedProjects)
    localStorage.setItem('projects', JSON.stringify(updatedProjects))
  }
  const [newProjectName, setNewProjectName] = useState('')
  const handleNewProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProjectName(event.target.value)
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
      <ProjectsList projects={projects} onAddProject={handleAddProject} />
      <Button>Crea un progetto +</Button>
      <div>
        <input type="text" value={newProjectName} onChange={handleNewProjectNameChange} />
        <button onClick={handleAddProject}>Aggiungi progetto</button>
      </div>
    </div>
  )
}

export default Home
