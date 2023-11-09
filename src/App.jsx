import styled from "styled-components";

function App() {
  return (
    <>
      <Container>Hello</Container>
    </>
  );
}

const Container = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
