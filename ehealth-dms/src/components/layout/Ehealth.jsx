import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import eHealthRoutes from "routes/routes.jsx";
import { LayoutComponent, Footer } from "components";
import {LandingPage} from "components";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function EhealthLayout(props) {
  const classes = useStyles();

    return (
      <div
        className={classes.root}
      >
        <LayoutComponent {...props} routes={eHealthRoutes} admintype={"ehdms"} />
        <main className={classes.content}>
        <div className={classes.toolbar} />
          <Switch>
            {eHealthRoutes.map((prop, key) => {
              if (!prop.page && props.location.pathname === prop.path) {
                return (
                  <Route
                    path={prop.path}
                    render={(props) => (
                      <prop.component {...props} />
                    )}
                    key={key}
                  />
                );
              }
              return "";
            })}
            <LandingPage />
          </Switch>
          {/* <Footer fluid /> */}
        </main>
      </div>
    );
}
