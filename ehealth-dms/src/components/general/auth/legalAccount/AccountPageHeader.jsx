import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Usestyles } from 'components';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const HeaderTextTypography = withStyles((theme) => ({
  root: {
    color: "white",
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      },
      fontWeight: 600,
      fontSize: '1.5rem',
      textAlign: 'left',
  },
}))(Typography);

export default function AccountPageHeader() {
  const classes = Usestyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.background} position="static">
        <Toolbar>
        <Container fixed maxWidth="sm"  className={classes.grow}>
          <HeaderTextTypography edge="start" variant="h6">
            Team 341 - A
          </HeaderTextTypography>       
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
