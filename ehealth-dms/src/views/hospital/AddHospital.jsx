import React, { useEffect, useState } from 'react';
import { Usestyles } from 'components';
import { countries } from "../../variables/countries.jsx";
import { Avatar, Typography, Grid } from "@material-ui/core";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { CustomInputs, CustomSelect } from "../../components/general/customStyles/CustomStyles"


export default function AddHospital(props) {
  const countryList = countries.map((item, i) => {
    return item.country
  });
  const classes = Usestyles();
  const [provinceList, setProvinceList] = useState([]);

  useEffect(() => {
    const provinceOptionsForCountry = (country) => {
      let plist = [];
      countries.forEach((item, i) => {
        if (country === item.country) {
          plist = item.province.map((region, index) => {
            return region.name;
          });
        }
      });
      return plist;
    };
    setProvinceList(provinceOptionsForCountry(props.country));
  }, [props.country]);

  return (
<div className={classes.formPaper}>
    <Avatar className={classes.avatar}>
        <AccountBalanceIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
    <label className="custom-label">Register Hospital</label>
    </Typography>
    <form className={classes.hospitalFormRoot}>
      <Grid className={classes.textField} container spacing={2}>
        <Grid item xs={12}>
        <CustomInputs
          id="hname"
          label="Hospital name"
          name="hospitalName"
          type="text"
          value={props.hospitalName}
          onChange={props.handleFormValueChange}
          error={(props.isDirty && !props.hospitalName) ? true : false}
          />
        </Grid>
        <Grid item xs={12}>
        <CustomInputs 
        id="contactperson"
        label="Contact Person"
        name="contactPerson"
        type="text"
        value={props.contactPerson}
        onChange={props.handleFormValueChange}
        error={(props.isDirty && !props.contactPerson) ? true : false}
        />
        </Grid>
        <Grid item xs={12}>
        <CustomInputs 
          id="contactnumber"
          label="Emergency Contact number"
          name="contact"
          type="text"
          value={props.contact}
          onChange={props.handleFormValueChange}
          error={(props.isDirty && !props.contact) ? true : false}
        />
        </Grid>
    <Grid item xs={12}>
      <CustomSelect 
        value={props.country}
        onChange={props.handleFormValueChange}
        label="Country"
        options={countryList}
        defaultValue="Select Country"
        name= 'country'
        id='country'
        error={(props.isDirty && !props.country) ? true : false}
      />
      </Grid>
      <Grid item xs={12}>
        <CustomSelect 
          value={props.state}
          onChange={props.handleFormValueChange}
          label="State"
          options={provinceList}
          defaultValue="Select State"
          name= 'state'
          id='state'
          error={(props.isDirty && !props.state) ? true : false}
        />
        </Grid>
        <Grid item xs={12}>
        <CustomInputs 
         id="services"
         label="Services offered"
         name="services"
         type="text"
         placeholder="Use key words-Eg: Midwifery, Stroke, Hypothermia, etc"
         multiline={true}
         value={props.services}
         onChange={props.handleFormValueChange}
         error={(props.isDirty && !props.services) ? true : false}
        />
        </Grid>
        <Grid item xs={12}>
        <CustomInputs 
          id="city"
          label="City"
          name="city"
          type="text"
          value={props.city}
          onChange={props.handleFormValueChange}
          error={(props.isDirty && !props.city) ? true : false}
        />
       <p className="login-individual">An individual? <Link underline="none" href="/individual-account" color="secondary">&nbsp;Create Account here</Link></p>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className={(props.isDirty && !props.checked) ? "generic-error-text" : classes.checkboxLabel}
            defaultChecked
            control={<Checkbox value="agree" checked={props.checked}
            onChange={props.handleCheckChanged} />}
            label= 'By continuing, I agree to Terms of Service and Privacy Policy'
          />
        </Grid>
      </Grid>
    </form>
    </div>
  );
}
