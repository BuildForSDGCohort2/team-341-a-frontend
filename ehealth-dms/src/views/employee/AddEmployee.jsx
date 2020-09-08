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

class AddEmployee extends Component {
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
    <Container component="main" maxWidth="xs">
      <div className={classes.formPaper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register a new Employee
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}> */}
            {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
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
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="outlined"
            color="secondary"
            className={classes.submit}
          >
            Register Employee
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddEmployee;
