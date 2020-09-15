import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Container from "@material-ui/core/Container/Container";
import { Usestyles } from "../../components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import {
  FormControlLabel,
  Checkbox,
  Button,
  MenuItem,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

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

  const employeeType = [
    {
      value: "doctor",
      label: "Doctor",
    },
    {
      value: "nurse",
      label: "Nurse",
    },
    {
      value: "pa",
      label: "PA",
    },
    {
      value: "socialWorker",
      label: "Social Worker",
    },
    {
      value: "administrator",
      label: "Administrator",
    },
    {
      value: "receptionist",
      label: "Receptionist",
    },
  ];

  const [employee, setEmployee] = React.useState();
  const [gender, setGender] = React.useState();
  const [status, setStatus] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleSelectChange = (event) => {
    let stateValue = event.target.name;

    if (stateValue === "employeeSelect") {
      setEmployee(event.target.value);
    }
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
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register a new Employee
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="select-employee-type"
                name="employeeSelect"
                select
                fullWidth
                size="medium"
                value={employee ? employee : "doctor"}
                defaultValue="doctor"
                onClick={handleSelectChange}
                helperText="Select employee type"
                variant="outlined"
              >
                {employeeType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
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
                id="uid"
                label="Employee ID"
                name="uid"
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
                label="Department ID"
                name="did"
                type="text"
                autoComplete="Department"
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
                type="tel"
                id="phone"
                autoComplete="current-phone"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="select-status-type"
                name="statusSelect"
                select
                fullWidth
                size="medium"
                value={status ? status : "permanent"}
                onClick={handleSelectChange}
                helperText="Select Employment status"
                variant="outlined"
              >
                <MenuItem value="permanent">Permanent</MenuItem>
                <MenuItem value="trainee">Trainee</MenuItem>
                <MenuItem value="visiting">Visiting</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  views={["year"]}
                  margin="normal"
                  fullWidth
                  variant="inline"
                  inputVariant="outlined"
                  maxDate={new Date()}
                  id="employment-date-picker-dialog"
                  label="Year of employment"
                  format="yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
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
