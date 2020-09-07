import React, { Component } from 'react';
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Usestyles } from 'components';
class AddRoom extends Component {
  render() {
    return (
      <React.Fragment>
        <NewRoom />
      </React.Fragment>
    );
  }
}

function NewRoom() {
  const classes = Usestyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.formPaper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a new Room
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Room Head"
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
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone"
                type="Phone"
                id="phone"
                autoComplete="current-phone"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="rno"
                name="number"
                variant="outlined"
                required
                fullWidth
                type="Number"
                id="rno"
                label="Room Number"
                autoFocus
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
            Add Room
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddRoom;
