import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  // 토큰 검증 과정추가 필요
  return localStorage.getItem("Access-Token") ? (
    element
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default PrivateRoute;
