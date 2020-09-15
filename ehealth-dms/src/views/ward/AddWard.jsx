import React, { Component } from 'react';
import { Container, Avatar, Typography, Grid, TextField, Button } from "@material-ui/core";
import HealingIcon from '@material-ui/icons/Healing';
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
          <HealingIcon />
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
                type="text"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="wid"
                label="Ward ID"
                type="text"
                name="wid"
                autoComplete="whname"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="hid"
                label="Hospital ID"
                type="text"
                name="hid"
                autoComplete="hid"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                type="text"
                id="description"
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