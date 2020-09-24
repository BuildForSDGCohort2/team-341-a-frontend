import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import BookmarksTwoToneIcon from '@material-ui/icons/BookmarksTwoTone';
import { Usestyles } from "components";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";

class PatientAppointment extends Component {
  render() {
    return (
      <React.Fragment>
        <AdmitPatient></AdmitPatient>
      </React.Fragment>
    );
  }
}

function AdmitPatient() {
  const classes = Usestyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.formPaper}>
        <Avatar className={classes.avatar}>
          <BookmarksTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Book Appointment
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="aid"
                label="Appointment ID"
                type="text"
                name="aid"
                autoComplete="aid"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="rno"
                name="did"
                variant="outlined"
                required
                fullWidth
                type="text"
                id="did"
                label="Doctor ID"
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
            <Grid item xs={12} sm={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  views={["date", "month", "year"]}
                  margin="normal"
                  fullWidth
                  variant="inline"
                  inputVariant="outlined"
                  maxDate={new Date()}
                  id="date-picker-dialog"
                  label="Visitation Date"
                  format="dd/MM/yy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={3}
                placeholder="Description"
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
            Book Appointment
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default PatientAppointment;
