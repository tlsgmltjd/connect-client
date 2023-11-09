import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return isLoggedin ? element : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
