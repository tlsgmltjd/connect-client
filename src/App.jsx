import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./components/PrivateRouter";

import * as P from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup/*" element={<P.SignupPage />} />
        <Route path="/login" element={<P.LoginPage />} />
        <Route path="/" element={<PrivateRoute element={<P.Test />} />} />
      </Routes>
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
