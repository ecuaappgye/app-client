import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children, ...props }) => {
  const { token } = useAuth();
  return (
    <Route
      {...props}
      render={({location}) =>
        token ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
