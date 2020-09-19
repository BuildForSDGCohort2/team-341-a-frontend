import React, { useEffect, useState } from 'react';
import { Usestyles } from 'components';
import { countries } from "../../../variables/countries.jsx";
import {CustomInputs, CustomSelect} from '../customStyles/CustomStyles';
import { Avatar, Typography, Grid } from "@material-ui/core";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';


export default function IndividualAccount() {
  const countryList = countries.map((item, i) => {
    return item.country
  });
  const initFormData =     {
    country: '',
    state: '',
    email: '',
    }
  const classes = Usestyles();
  const [provinceList, setProvinceList] = useState([]);
  const [formData, setFormData] = useState(initFormData);
  const [checked, setChecked] = React.useState(false);
  const [values, setValues] = React.useState({
    fullname: '',
    email: '',
    password: '',
    phone: '',
    showPassword: false,
  });

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

  const handleCheckChanged = (e) => {
    setChecked(e.target.checked);
  };

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  return (
  <div className={classes.formPaper}>
    <Avatar className={classes.avatar}>
        <AccountBalanceIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
    <label className="custom-label">Basic Info</label>
    </Typography>
    <form className={classes.hospitalFormRoot}>
      <Grid className={classes.textField} container spacing={2}>
        <Grid item xs={12}>
        <p className="login-individual">An Institution? <Link underline="none" href="#" color="secondary">&nbsp;Create Account here</Link></p>
          <CustomInputs
          id="fullname"
          label="Full name"
          name="fullname"
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
          id="email"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleFormValueChange}
        />
        <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" className={classes.passwordRoot}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                    labelWidth={70}
                  />
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <CustomInputs
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <p className="login-toggler">Already have an Account? <Link underline="none" href="#" color="secondary">&nbsp;Login </Link></p>
            </Grid>
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
  );
}
