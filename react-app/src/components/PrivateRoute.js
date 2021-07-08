import React from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const token = Cookies.get("LJTSK");
  return (
    <Route
      {...rest}
      render={(props) => {
        return token !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
export default PrivateRoute;
