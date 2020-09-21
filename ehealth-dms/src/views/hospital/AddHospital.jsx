import React, { useEffect, useState } from 'react';
import { Usestyles } from 'components';
import { countries } from "../../variables/countries.jsx";
import { Avatar, Typography, Grid } from "@material-ui/core";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { CustomInputs, CustomSelect } from "../../components/general/customStyles/CustomStyles"


export default function AddHospital() {
  const countryList = countries.map((item, i) => {
    return item.country
  });
  const initFormData =     {
    country: '',
    state: '',
    city: '',
    }
  const classes = Usestyles();
  const [provinceList, setProvinceList] = useState([]);
  const [formData, setFormData] = useState(initFormData);
  const [checked, setChecked] = useState(false);

  const handleFormValueChange = ({ target: { name, value } }) => {
    let newValue = name === "contact" ? value.trim().replace(/\s+/g, "") : value;
    setFormData((s) => ({
      ...s,
      [name]: newValue,
    }));
  };
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
    setProvinceList(provinceOptionsForCountry(formData.country));
  }, [formData.country]);

  useEffect(() => {
    setFormData((s) => ({
      ...s,
      city: "",
    }));
  }, [formData.state]);

  const handleCheckChanged = (e) => {
    setChecked(e.target.checked);
  };
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
          name="hospitalname"
          type="text"
          />
        </Grid>
        <Grid item xs={12}>
        <CustomInputs 
        id="contactperson"
        label="Contact Person"
        name="contactPerson"
        type="text"
        />
        </Grid>
        <Grid item xs={12}>
        <CustomInputs 
          id="contactnumber"
          label="Emergency Contact number"
          name="contact"
          type="text"
        />
        </Grid>
    <Grid item xs={12}>
      <CustomSelect 
        value={formData.country}
        onChange={handleFormValueChange}
        label="Country"
        options={countryList}
        defaultValue="Select Country"
        name= 'country'
        id='country'
      />
      </Grid>
      <Grid item xs={12}>
        <CustomSelect 
          value={formData.state}
          onChange={handleFormValueChange}
          label="State"
          options={provinceList}
          defaultValue="Select State"
          name= 'state'
          id='state'
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
        />
        </Grid>
        <Grid item xs={12}>
        <CustomInputs 
          id="city"
          label="City"
          name="city"
          type="text"
          value={formData.city}
          onChange={handleFormValueChange}
        />
       <p className="login-individual">An individual? <Link underline="none" href="/individual-account" color="secondary">&nbsp;Create Account here</Link></p>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className={classes.checkboxLabel}
            defaultChecked
            control={<Checkbox value="agree" checked={checked}
            onChange={handleCheckChanged} />}
            label= 'By continuing, I agree to Terms of Service and Privacy Policy'
          />
        </Grid>
      </Grid>
    </form>
    </div>
  );
}
