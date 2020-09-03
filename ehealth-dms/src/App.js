import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/custom-styles.scss";

import indexRoutes from "./routes/index.jsx";
import { Spinner } from "./components";

function App() {
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
                render={(props) => (
                  <prop.component {...props} />
                )}
              />
            );
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
