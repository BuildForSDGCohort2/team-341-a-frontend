import React, { Component } from 'react';
import { Container, Avatar, Typography, Grid, TextField, Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Usestyles } from 'components';


class AddDepartment extends Component {

  render () {

  return ( 
       <React.Fragment>
         <NewDepartment />
       </React.Fragment>
   );

  }
}

function NewDepartment() {
  const classes = Usestyles()

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.formPaper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a new Department
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="dname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="dname"
                label="Department Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Head of Department"
                name="lastName"
                autoComplete="lname"
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            size="large"
            color="secondary"
            className={classes.submit}
          >
            Add Department
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default AddDepartment;