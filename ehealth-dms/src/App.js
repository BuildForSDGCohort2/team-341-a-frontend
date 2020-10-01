import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/custom-styles.scss";
import "../node_modules/animate.css/animate.css";
import { Login } from "components";

import indexRoutes from "./routes/index.jsx";
import { Spinner } from "./components";

function App(props) {

  return (
    <>
      <Spinner />
      <Router>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                key={key}
                render={(props) => (<prop.component {...props} />)}
              />
            );
          })}
        </Switch>
        <Route exact path="/" component={Login} />
      </Router>
    </>
  );
}

export default App;
