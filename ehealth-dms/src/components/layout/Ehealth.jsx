import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import eHealthRoutes from "routes/routes.jsx";
import { LayoutComponent } from "components";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withFirebase } from '../../firebase';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // minHeight: "100vh",
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
  },
}));

function EhealthLayout(props) {
  const classes = useStyles();

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    props.firebase.auth.onAuthStateChanged(user => {
      user
        ? setAuthUser(user)
        : setAuthUser(null);
    });
  }, [props.firebase.auth]);

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
                      <prop.component {...props}  userInfo={authUser} />
                    )}
                    key={key}
                  />
                );
              }
              return "";
            })}
          </Switch>
        </main>
      </div>
    );
}
export default withFirebase(EhealthLayout);