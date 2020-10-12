import React from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import {CustomInputs, CustomSelect} from '../../components/general/customStyles/CustomStyles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography/Typography';

export default function InitEmployee(props) {

  const classes = Usestyles();

  const options = ['Male','Female','Others']

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
              onChange={props.handleFormValueChange}
              value={props.fullName}
              error={(props.isDirty && !props.fullName) ? true : false}
               />
            </Grid>
            <Grid item xs={12}>
            <CustomInputs
              label={props.isValidDoB ? "Date of Birth" : "User must be 18 yrs and above"}
              name="dob"
              id="dob"
              type="date"
              defaultValue="05/24/2017"
              onChange={props.handleFormValueChange}
              value={props.dob}
              shrink={true}
              error={!props.isValidDoB ? true : false}
               />
            </Grid>
            <Grid item xs={12}>
              <CustomSelect 
              value={props.gender}
              onChange={props.handleFormValueChange}
              label="Gender"
              options={options}
              defaultValue="Select Gender"
              name= 'gender'
              id='gender'
              error={(props.isDirty && !props.gender) ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
            <CustomInputs
              name="phone"
              label="Phone"
              type="text"
              id="phone"
              onChange={props.handleFormValueChange}
              value={props.phone}
              error={(props.isDirty && !props.phone) ? true : false}
               />
            </Grid>
            <Grid item xs={12}>
              <CustomInputs
                name="email"
                label="Email"
                type="text"
                id="email"
                onChange={props.handleFormValueChange}
                value={props.email}
                error={(props.isDirty && !props.email) ? true : false}
                />
            </Grid>
          </Grid>
        </form>
      </div>
  );
}

