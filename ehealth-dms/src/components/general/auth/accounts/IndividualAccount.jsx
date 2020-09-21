import React, { useEffect, useState } from 'react';
import { Usestyles, IndividualAccountStepper, AccountPageHeader } from 'components';
import { countries } from "../../../../variables/countries.jsx";
import {CustomInputs, CustomSelect} from '../../customStyles/CustomStyles';
import { Avatar, Typography, Grid } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';


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
  <div className={classes.landingPageStyling} >
    <AccountPageHeader />
    <Grid item xs={12}>
      <Paper className={classes.headerStepper} elevation={0}>
          <IndividualAccountStepper />
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.headerDescription} elevation={0}>
      <Container fixed maxWidth="md">
        <p className="iheading-description">SDG Cohort 2 Project<br/><span>eHealth Delivery Management System</span><br/>Your healthcare solution</p>
      </Container>
      </Paper>
    </Grid>
<Container fixed className={classes.IAccountContainerRoot} maxWidth="sm">
    <CssBaseline />
  <div className={classes.formPaper}>
    <Avatar className={classes.avatar}>
        <AccountCircleIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
    <label className="custom-label">Basic Info</label>
    </Typography>
    <form className={classes.hospitalFormRoot}>
      <Grid className={classes.textField} container spacing={2}>
        <Grid item xs={12}>
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
       </Grid>
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
            <p className="login-individual">An Institution? <Link underline="none" href="/legal-entity-account" color="secondary">&nbsp;Create Account here</Link></p>        
             </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className={classes.checkboxLabel}
            defaultChecked
            control={<Checkbox value="agree" checked={checked}
            onChange={handleCheckChanged} />}
            label= {'By continuing, I agree to Terms of Service and Privacy Policy'} 
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
          Sign Up
      </Button>
      <hr />
      <p className="login-toggler">Already have an Account? <Link underline="none" href="/login" color="secondary">&nbsp;Login </Link></p>      
    </form>
  </div>
</Container>
</div>
  );
}
