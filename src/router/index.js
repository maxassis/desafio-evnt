import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/index";
import Restaurantes from "../pages/Restaurantes/index";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>

          <Route path="/restaurantes" exact={true}>
            <Restaurantes />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
