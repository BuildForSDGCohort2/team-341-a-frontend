import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Usestyles } from 'components';
import Container from '@material-ui/core/Container';

const HeaderTextTypography = withStyles((theme) => ({
  root: {
    color: "white",
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      },
      fontWeight: 600,
      fontSize: '1.5rem',
      textAlign: 'left',
      paddingLeft: '4rem'
  },
}))(Typography);

export default function LandingPageHeader() {
  const classes = Usestyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.background} position="static">
        <Toolbar>
        <Container fixed maxWidth="md">
          <HeaderTextTypography variant="h6" className={classes.grow}>
            SDG Team 341-A
          </HeaderTextTypography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}