import React, { Component } from 'react';
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


class Login extends Component {
  render() {
    return (
      <>
        <AddLoginComponent />
      </>
    );
  }
}

function AddLoginComponent() {
  const classes = Usestyles();
  const [values, setValues] = React.useState({
    fullname: '',
    email: '',
    password: '',
    phone: '',
    showPassword: false,
  });
  const [checked, setChecked] = React.useState(false);

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
    <Paper className={"loginPaper"} style={{backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
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
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" className={classes.passwordRoot}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                          id="outlined-adornment-password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password}
                          onChange={handleChange('password')}
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
      <hr/>
      <p className="login-toggler">Dont have an account?<Link underline="none" href="/individual-account" color="secondary">&nbsp;Register Here?</Link></p>
    </form>
  </Grid>
  </Paper>
  </Container>
  </div>
  );
}

export default Login;
