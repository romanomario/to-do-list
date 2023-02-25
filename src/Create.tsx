import styled from "styled-components";

const Create: React.FC = () => {
  
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

  return (
    <div>
      <h3>I tuoi progetti</h3>
      <p>Crea un nuovo progetto</p>
    </div>
  );
};

export default Create;