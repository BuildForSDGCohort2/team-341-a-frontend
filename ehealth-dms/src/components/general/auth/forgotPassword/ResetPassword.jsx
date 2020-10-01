import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Usestyles, AccountPageHeader } from 'components';
import Grid from '@material-ui/core/Grid';
import {Button } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { CustomInputs } from '../../customStyles/CustomStyles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { Paper, Typography, Box } from '@material-ui/core';


class ResetPassword extends Component {
  render() {
    return (
      <>
        <AddResetComponent />
      </>
    );
  }
}

function AddResetComponent() {
  const classes = Usestyles();
  const [values, setValues] = React.useState({
    email: '',
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };


  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="bgimg" >
    <AccountPageHeader />
    <Grid item xs={12}>
      <Paper className={classes.loginDescription} elevation={0}>
      <Container fixed maxWidth="md">
        <p className="login-heading-description">SDG Cohort 2 Project<br/><span>eHealth Delivery Management System</span><br/>Your healthcare solution</p>
      </Container>
      </Paper>
    </Grid>
    <Container fixed className={classes.loginContainerRoot} maxWidth="sm">
    <Paper className={"animate-paper"} style={{backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
      <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <label className="custom-label">Reset Password</label>
        </Typography>
        </Grid>
        <form className={classes.hospitalFormRoot}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomInputs
              id="email"
              label="Email Address"
              name="email"
              type="email"
            />
            </Grid>
          </Grid>
          <Button
          type="submit"
          fullWidth
          size="large"
          variant="outlined"
          color="secondary"
          className={classes.submit}
        >
          Reset Password
      </Button>
      <hr/>
      <p className="login-toggler">Remember Password?<Link underline="none" href="/login" color="secondary">&nbsp;Login?</Link></p>
    </form>
  </Paper>
  </Container>
  </div>
  );
}

export default ResetPassword;
