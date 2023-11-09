import styled from "styled-components";

function App() {
  return (
    <>
      <Container>
        <Title>CONNECT</Title>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #1f1e2b;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 3.5rem;
`;

export default App;
