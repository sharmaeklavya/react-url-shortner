import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { UserProvider } from "./components/Usercontext";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UpdatePass from "./components/UpdatePass";
import ResetPass from "./components/ResetPass";
import Dashboard from "./components/Dashboard";
import Cookies from "js-cookie";

function App() {
  const history = useHistory();
  if (Cookies.get("LJTSK") !== undefined) {
    history.push("/dashboard");
  }

  return (
    <HelmetProvider>
      <UserProvider>
        <Switch>
          <PrivateRoute
            exact={true}
            path="/dashboard"
            component={Dashboard}
          ></PrivateRoute>
          <Route exact={true} path="/login" component={Login}></Route>
          <Route
            path="/update-password/:id"
            component={UpdatePass}
            exact={true}
          ></Route>
          <Route
            exact={true}
            path="/reset-password"
            component={ResetPass}
          ></Route>
          <Route exact={true} path="/dashboard" component={Dashboard}></Route>
          <Route exact={true} path="/" component={Signup}></Route>
          <Route exact={true} path="*" component={Login}></Route>
        </Switch>
      </UserProvider>
    </HelmetProvider>
  );
}

export default App;
