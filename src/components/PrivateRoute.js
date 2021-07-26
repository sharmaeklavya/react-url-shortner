import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./Usercontext";

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedin } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedin ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
}
export default PrivateRoute;
