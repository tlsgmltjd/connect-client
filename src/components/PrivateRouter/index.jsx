import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  return localStorage.getItem("Access-Token") ? (
    element
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default PrivateRoute;
