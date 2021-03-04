import React from 'react';
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route path={props.path}>
      <Component {...props} />
    </Route>
  )
}

export default ProtectedRoute;
