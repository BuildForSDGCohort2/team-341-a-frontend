import React, { useEffect, useState } from 'react';
import { Usestyles, Login, IndividualAccount } from 'components';
import { countries } from "../../variables/countries.jsx";
import {CustomInputs, CustomSelect} from '../../components/general/customStyles/CustomStyles';
import { Avatar, Typography, Grid } from "@material-ui/core";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';


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
  const [toggleLoginForm, setLoginToggle] = useState(false);
  const [toggleIndividualForm, setIndividualToggle] = useState(false);

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
  const handleLoginToggle = (e) => {
    setLoginToggle(toggleLoginForm = !toggleLoginForm)
  }
  const handleIndividualToggle = (e) => {
    setIndividualToggle(toggleIndividualForm = !toggleIndividualForm)
  }
  return (
    <>
    {toggleLoginForm && <Login />}
    {!toggleLoginForm && <div className={classes.formPaper}>
    <Avatar className={classes.avatar}>
        <AccountBalanceIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
    <label className="custom-label">Register Hospital</label>
    </Typography>
    <form className={classes.hospitalFormRoot}>
      <Grid className={classes.textField} container spacing={2}>
        <Grid item xs={12}>
        <p className="login-individual">An individual? <Link underline="none" href="#" color="secondary" onClick={handleIndividualToggle}>&nbsp;Create Account here</Link></p>
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
        <p className="login-toggler">Already have an Account? <Link underline="none" href="#" color="secondary" onClick={setLoginToggle}>&nbsp;Login </Link></p>
        </Grid>
        <Grid item xs={12}>
              <FormControlLabel
                className={classes.checkboxLabel}
                defaultChecked
                control={<Checkbox value="agree" checked={checked}
                onChange={handleCheckChanged} />}
                label= 'By continuing, I agree to terms and conditions'
              />
            </Grid>
      </Grid>
    </form>
    </div>
  }
    </>
  );
}
