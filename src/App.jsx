import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRouter";

import * as P from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/signup/*" element={<P.SignupPage />} />
          <Route path="/login" element={<P.LoginPage />} />
        </Routes>
      </>
      <>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<P.MainPage />} />} />
          <Route
            path="/chat/*"
            element={<PrivateRoute element={<P.ChatPage />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<P.ProfilePage />} />}
          />
          <Route
            path="/boards"
            element={<PrivateRoute element={<P.BoardPage />} />}
          />
          <Route
            path="/search"
            element={<PrivateRoute element={<P.SearchPage />} />}
          />
        </Routes>
      </>
    </>
  );
}

export default App;
