import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/LoginPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
    </Switch>
  );
};

export default Routes;
