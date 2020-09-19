import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { CustomInputs } from '../customStyles/CustomStyles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Link from '@material-ui/core/Link';


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
      <div className={classes.formPaper}>
            <Avatar className={classes.avatar}>
              <VpnKeyIcon />
            </Avatar>
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
            <p className="login-toggler">Forgot<Link underline="none" href="#" color="secondary">&nbsp;Password?</Link></p>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
              className={classes.checkboxLabel}
                defaultChecked
                control={<Checkbox value="login" checked={checked}
                onChange={handleCheckChanged} />}
                label= 'Remember me'
              />
            </Grid>
          </Grid>
        </form>
      </div>
  );
}

export default Login;
