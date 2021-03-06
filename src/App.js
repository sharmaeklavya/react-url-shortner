import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { UserProvider } from "./components/Usercontext";
import PrivateRoute from "./components/PrivateRoute";
import UpdatePass from "./components/UpdatePass";
import ResetPass from "./components/ResetPass";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <UserProvider>
          <Switch>
            <PrivateRoute
              exact={true}
              path="/dashboard"
              component={Dashboard}
            ></PrivateRoute>
            <Route exact={true} path="/register" component={Register}></Route>
            <Route
              exact={true}
              path="/reset-password"
              component={ResetPass}
            ></Route>
            <Route
              path="/update-password/:rstring"
              component={UpdatePass}
              exact={true}
            ></Route>
            <Route exact={true} path="/" component={Login}></Route>
            <Route exact={true} path="*" component={Login}></Route>
          </Switch>
        </UserProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
