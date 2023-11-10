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

export default App;
