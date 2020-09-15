import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Typography from '@material-ui/core/Typography/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Usestyles } from '../../components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { CustomInputs } from '../../components/general/customStyles/CustomStyles';


class AdminUser extends Component {
  render() {
    return (
      <React.Fragment>
        <AddAdminUser />
      </React.Fragment>
    );
  }
}

function AddAdminUser() {
  const classes = Usestyles();
  const [values, setValues] = React.useState({
    fullname: '',
    email: '',
    password: '',
    phone: '',
    showPassword: false,
  });
  const [checked, setChecked] = React.useState(true);

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
        <Typography component="h1" variant="h3">
          <label className="custom-label">Create Login Credential</label>
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
            <CustomInputs
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
              className={classes.checkboxLabel}
                defaultChecked
                control={<Checkbox value="sendEmails" checked={checked}
                onChange={handleCheckChanged} />}
                label= 'An email will be sent to this user to complete registration.'
              />
            </Grid>
          </Grid>
        </form>
      </div>
  );
}

export default AdminUser;
