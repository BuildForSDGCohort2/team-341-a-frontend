import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import {CustomInputs, CustomSelect} from '../../components/general/customStyles/CustomStyles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography/Typography';
// import { CustomInputs } from "../../components/general/customStyles/CustomInputs";
// import { CustomSelect } from "../../components/general/customStyles/CustomSelect";

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

  const CURRENT_DATE = new Date();
  const classes = Usestyles();
  const initFormData =     {
    fullName: '',
    gender: '',
    phone: '',
    email: '',
    dob: CURRENT_DATE
    }
  const options = ['Male','Female','Others']

  const [formData, setFormData] = useState(initFormData);


  const handleFormValueChange = ({ target: { name, value } }) => {
    let newValue = name === "contact" ? value.trim().replace(/\s+/g, "") : value;
    setFormData((s) => ({
      ...s,
      [name]: newValue,
    }));
  };

  return (
      <div className={classes.formPaper}>
            <Avatar className={classes.avatar}>
              <PersonAddIcon />
            </Avatar>
        <Typography component="h1" variant="h5">
          <label className="custom-label">Add Admin User</label>
        </Typography>

        <form className={classes.hospitalFormRoot}>
        <Grid className={classes.textField} container spacing={2}>
            <Grid item xs={12}>
              <CustomInputs
              label="Full Name"
              name="fullName"
              id="fullName"
              type="text"
              onChange={handleFormValueChange}
              value={formData.fullName}
               />
            </Grid>
            <Grid item xs={12}>
            <CustomInputs
              label="Date of Birth"
              name="dob"
              id="dob"
              type="date"
              onChange={handleFormValueChange}
              value={formData.dob}
              shrink={true}
               />
            </Grid>
            <Grid item xs={12}>
              <CustomSelect 
              value={formData.gender}
              onChange={handleFormValueChange}
              label="Gender"
              options={options}
              defaultValue="Select Gender"
              name= 'gender'
              id='gender'
              />
            </Grid>
            <Grid item xs={12}>
            <CustomInputs
              name="phone"
              label="Phone"
              type="text"
              id="phone"
              onChange={handleFormValueChange}
              value={formData.fullName}
               />
            </Grid>
            <Grid item xs={12}>
              <CustomInputs
                name="email"
                label="Email"
                type="text"
                id="email"
                onChange={handleFormValueChange}
                value={formData.fullName}
                />
            </Grid>
          </Grid>
        </form>
      </div>
  );
}

export default InitEmployee;
