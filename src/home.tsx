import React, { useEffect } from 'react'
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
  // const [projects, setProjects] = useState(null)

  useEffect(() => {
    // fetch()
  }, [])

  return (
    <div>
      <h3>I tuoi progetti</h3>
      <Button>Crea un progetto +</Button>
    </div>
  )
}

export default Home
