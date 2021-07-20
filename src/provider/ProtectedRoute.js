import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children, ...props }) => {
  const { token } = useAuth();
  return (
    <Route {...props} render={() => (token ? children : <Redirect to="/" />)} />
  );
};

export default ProtectedRoute;
