import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";
import TransitEnterexitTwoToneIcon from "@material-ui/icons/TransitEnterexitTwoTone";
import Container from "@material-ui/core/Container/Container";
import { Usestyles } from "components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import { Button, MenuItem } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
class DischargePatient extends Component {
  render() {
    return (
      <React.Fragment>
        <PatientDischarge></PatientDischarge>
      </React.Fragment>
    );
  }
}

function PatientDischarge() {
  const classes = Usestyles();

  const [gender, setGender] = React.useState();
  const [status, setStatus] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleSelectChange = (event) => {
    let stateValue = event.target.name;

    if (stateValue === "genderSelect") {
      setGender(event.target.value);
    }
    if (stateValue === "statusSelect") {
      setStatus(event.target.value);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.formPaper}>
        <Avatar className={classes.avatar}>
          <TransitEnterexitTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Discharge Patient
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="select-status-type"
                name="statusSelect"
                select
                fullWidth
                size="medium"
                value={status ? status : "no"}
                onClick={handleSelectChange}
                helperText="Select Admission status"
                variant="outlined"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="select-gender-type"
                name="genderSelect"
                select
                fullWidth
                size="medium"
                value={gender ? gender : "male"}
                onClick={handleSelectChange}
                helperText="Select Gender"
                variant="outlined"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pid"
                label="Patient ID"
                name="pid"
                type="text"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="did"
                label="Full Name"
                name="did"
                type="text"
                autoComplete="full name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="text"
                autoComplete="address"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone"
                type="tel"
                id="phone"
                autoComplete="current-phone"
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
                  id="visitation-date-picker-dialog"
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="outlined"
            color="secondary"
            className={classes.submit}
          >
            Discharge
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default DischargePatient;
