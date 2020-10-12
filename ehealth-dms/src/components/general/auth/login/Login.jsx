import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Usestyles, AccountPageHeader } from 'components';
import Grid from '@material-ui/core/Grid';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { CustomInputs } from '../../customStyles/CustomStyles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { Paper, Typography, Box } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase  } from '../../../../firebase';
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function CustomSnackBar(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function LoginComponent(props) {

  const initState = {
    email: '',
    password: '',
    showPassword: false,
    error: null
  }

  const classes = Usestyles();
  const [values, setValues] = useState(initState);
  const [checked, setChecked] = useState(false);
  const [isCommiting, setIsCommiting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
 const handleCheckChanged = (e) => {
    setChecked(e.target.checked);
  };
  const onSubmit = e => {  
    e.preventDefault();
    setIsCommiting(true);
    props.firebase
      .signIn(values.email, values.password)
      .then((data) => {
        if (data.user.emailVerified) {
          setValues(initState);
          props.history.push('/app');
          setIsCommiting(false);
        } else {
          setOpen(true);          
          setIsCommiting(false);
        }
      })
      .catch(err => {
        setIsCommiting(false);
        setValues({...values, error: err});
      });
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
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
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <label className="custom-label">Sign In</label>
          </Typography>
        <form className={classes.hospitalFormRoot} onSubmit={onSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomInputs
              id="email"
              label="Email Address"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              required
            />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" className={classes.passwordRoot}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                          id="outlined-adornment-password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password}
                          onChange={handleChange('password')}
                          required
                          endAdornment={
                          <InputAdornment position="end">
                              <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              >
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                          </InputAdornment>
                          }
                          labelWidth={70}
                  />
            </FormControl>
           </Grid>

            <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" className={classes.loginBox}>
            <Box>
              <FormControlLabel
              className={classes.loginCheckboxLabel}
                defaultChecked
                control={<Checkbox value="login" checked={checked}
                onChange={handleCheckChanged} />}
                label= 'Remember me'
              />
              </Box>
              <Box>
              <p className="forgot-password">Forgot<Link underline="none" href="/reset-password" color="secondary">&nbsp;Password?</Link></p>            
              </Box>
              </Box>
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
          Login
      </Button>
      {values.error && <p className="error-text">{values.error.message}</p>}
      {isCommiting && <LinearProgress /> }
      <hr/>
      <p className="login-toggler">Don't have an account?<Link underline="none" href="/individual-account" color="secondary">&nbsp;Register Here?</Link></p>
    </form>
  </Grid>
  </Paper>
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <CustomSnackBar onClose={handleClose} severity="error">
      You haven't verified your email address!
    </CustomSnackBar>
  </Snackbar>
  </Container>
  </div>
  );
}

export default compose(withRouter, withFirebase)(LoginComponent);
