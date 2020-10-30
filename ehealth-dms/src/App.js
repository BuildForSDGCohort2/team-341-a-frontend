import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import "assets/scss/custom-styles.scss";
import "../node_modules/animate.css/animate.css";
import { Login } from "components";

import { globalTheme } from "components/general/customStyles/CustomStyles";
import indexRoutes from "./routes/index.jsx";
import { Spinner } from "./components";
import Landing from "./components/general/Landing/Landing";

function App(props) {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <Spinner />
        <Router>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  key={key}
                  render={(props) => <prop.component {...props} />}
                />
              );
            })}
          </Switch>
          <Route exact path="/" component={Landing} />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
