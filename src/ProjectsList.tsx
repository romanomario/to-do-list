import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

interface Project {
  id: number
  name: string
}

interface Props {
  projects: Project[]
  onAddProject: () => void
  onDeleteProject: (id: number) => void
}

const ProjectTab = styled.button`
    color: blue;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 0.2em;
    border: 2px solid blue;
    border-radius: 3px;
    width: 200px;
    text-align: center;
    text-transform: capitalize;

    &:hover {
      color: violet;
      border: 2px solid violet;
    }
  `
const IconContent = styled.span`
    width: auto;
    float: right;
    padding-right: 10px;
    `

const ProjectsList: React.FC<Props> = ({ projects, onDeleteProject }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectTab>
            {project.name}
            <IconContent onClick={() => { onDeleteProject(project.id) }}>
              <FontAwesomeIcon icon={faTrashCan} />
            </IconContent>
          </ProjectTab>
        </div>
      ))}
    </div>
  )
}

export default ProjectsList
