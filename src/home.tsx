import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Home: React.FC = () => {
  const [projects, setProjects] = useState<Array<{ id: number, name: string }>>([])

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects')
    if (storedProjects != null) {
      const parsedProjects = JSON.parse(storedProjects)
      setProjects(parsedProjects)
    }
  }, [])

  // Aggiungi questi valori di esempio al localStorage
  useEffect(() => {
    const projects = [
      { id: 1, name: 'Project One' },
      { id: 2, name: 'Project Two' }
    ]
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [])

  return (
    <div>
      <h3>I tuoi progetti</h3>
      <Button>Crea un progetto +</Button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
