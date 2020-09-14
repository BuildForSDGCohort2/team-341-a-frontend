import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Typography from '@material-ui/core/Typography/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Usestyles } from '../../components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import { FormControlLabel, Checkbox, Link, Button } from '@material-ui/core';

class InitEmployee extends Component {
  render() {
    return (
      <React.Fragment>
        <RegisterForm />
      </React.Fragment>
    );
  }
}

function RegisterForm() {
  const classes = Usestyles();

  return (
      <div className={classes.formPaper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Employee
        </Typography>

        <form className={classes.hospitalFormRoot}>
        <Grid className={classes.textField} container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fulltName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="dept"
                label="Department"
                name="dept"
                autoComplete="dept"
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
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone"
                type="phone"
                id="phone"
                autoComplete="current-phone"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Email is sent to employee to complete registration."
              />
            </Grid>
          </Grid>
        </form>
      </div>
  );
}

export default InitEmployee;
