import React, { Component } from 'react';
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
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
          <MeetingRoomIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a new Room
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="rid"
                label="Room ID"
                type="text"
                name="rid"
                autoComplete="rid"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="rno"
                name="number"
                variant="outlined"
                required
                fullWidth
                type="number"
                id="rno"
                label="Room Number"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pid"
                label="Patient ID"
                type="text"
                name="pid"
                autoComplete="pid"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="wid"
                label="Ward ID"
                type="text"
                id="wid"
                autoComplete="current-wid"
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
