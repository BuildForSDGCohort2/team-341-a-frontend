import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Typography from '@material-ui/core/Typography/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Usestyles } from '../../components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import { FormControlLabel, Checkbox, Link, Button } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

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
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Admin
        </Typography>

        <form className={classes.hospitalFormRoot}>
          <Grid className={classes.textField} container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fullname"
                label="Fullname"
                name="fullname"
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
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
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone"
                id="phone"
                autoComplete="current-phone"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                defaultChecked
                control={<Checkbox value="sendEmails" checked={checked}
                onChange={handleCheckChanged} />}
                label="An automatic email will be sent to user to complete registration."
              />
            </Grid>
          </Grid>
        </form>
      </div>
  );
}

export default AdminUser;
