import React from 'react'
import styled from 'styled-components'

interface Project {
  id: number
  name: string
}

interface Props {
  projects: Project[]
  onAddProject: () => void
}

const ProjectTab = styled.button`
    color: blue;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 0.2em;
    border: 2px solid blue;
    border-radius: 3px;

    &:hover {
      color: violet;
      border: 2px solid violet;
    }
  `

const ProjectsList: React.FC<Props> = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectTab>{project.name}</ProjectTab>
        </div>
      ))}
    </div>
  )
}

export default ProjectsList
