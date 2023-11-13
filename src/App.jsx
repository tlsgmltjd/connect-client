import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./components/PrivateRouter";

import * as P from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/signup/*" element={<P.SignupPage />} />
        <Route path="/login" element={<P.LoginPage />} />
        <Route path="/" element={<PrivateRoute element={<P.MainPage />} />} />
        <Route
          path="/board"
          element={<PrivateRoute element={<P.BoardPage />} />}
        />
      </Routes>
    </>
  );
}

export default App;
