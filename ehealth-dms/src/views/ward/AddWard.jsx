import React, { Component } from 'react';
import { Container, Avatar, Typography, Grid, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Usestyles } from "components";
class AddWard extends Component {

  render () {

  return ( 
        <React.Fragment>
          <NewWard />
        </React.Fragment>
   );

  }
}

function NewWard() {
  const classes = Usestyles()

  return(
    <Container component="main" maxWidth="xs">
      <div className={classes.formPaper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a new Ward
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="wname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="wname"
                label="Ward Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="wHeadName"
                label="Ward Head"
                name="wHeadName"
                autoComplete="whname"
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
            Add Ward
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default AddWard;