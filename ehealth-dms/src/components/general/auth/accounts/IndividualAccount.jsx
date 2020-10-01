import React, { useEffect, useState } from 'react';
import { Usestyles, IndividualAccountStepper, AccountPageHeader, EmailConfirmation } from 'components';
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
import { withFirebase  } from '../../../../firebase';
import { withRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import { compose } from 'recompose';


function getSteps() {
  return ['Create Account', 'Confirm Email'];
}
// const userData = JSON.parse(localStorage.getItem('eHealthUser'));
function IndividualAccount(props) {
  const countryList = countries.map((item, i) => {
    return item.country
  });
  const initFormData = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    showPassword: false,
    avatar: '',
    country: '',
    state: '',
    city: '',
    error: null
    }
  const classes = Usestyles();
  const [provinceList, setProvinceList] = useState([]);
  const [formData, setFormData] = useState(initFormData);
  const [checked, setChecked] = useState(false);
  const [passwordMatched, setPasswordMatched] = useState(false);
  const [isCommiting, setIsCommiting] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [user, setUser] = useState(null);
  const [route, setRoute] = useState(null);

  const handleFormValueChange = ({ target: { name, value } }) => {
    let newValue = name === "contact" ? value.trim().replace(/\s+/g, "") : value;
    setFormData((s) => ({
      ...s,
      [name]: newValue,
    }));
    
    if (passwordMatched && name === "confirmPassword") {
      setPasswordMatched(formData.password !== value);
    }
  };
  useEffect(() => {
    props.firebase.auth.onAuthStateChanged(user => {
      (user && user.emailVerified) 
        ? props.history.push('/')
        : setActiveStep(1);
        setUser({email: user.email});
    })
  },[user])

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
    setFormData({ ...formData, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const onSubmit = (e) => { 
    e.preventDefault();
    setIsCommiting(true);
    props.firebase
      .createUser(formData)
      .then(authUser => {
        setUser({email: formData.email});
        setFormData(initFormData);
        setIsCommiting(false);
        handleNext();
      })
      .catch(err => {
        setIsCommiting(false);
        setFormData({...formData, error: err});
      });
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  function handlePasswordMatched() {
    setPasswordMatched(formData.password !== formData.confirmPassword);
  }

  return (
  <div className={classes.landingPageStyling} >
    <AccountPageHeader />
    <Grid item xs={12}>
      <Paper className={classes.headerStepper} elevation={0}>
          <IndividualAccountStepper
            steps={steps}
            activeStep={activeStep}
           />
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.headerDescription} elevation={0}>
      <Container fixed maxWidth="md">
        <p className="iheading-description">SDG Cohort 2 Project<br/><span>eHealth Delivery Management System</span><br/>Your healthcare solution</p>
      </Container>
      </Paper>
    </Grid>
  {activeStep === 0 ? (
  <Container fixed className={classes.IAccountContainerRoot} maxWidth="sm">
    <CssBaseline />
  <div className={classes.formPaper}>
    <Avatar className={classes.avatar}>
        <AccountCircleIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
    <label className="custom-label">Basic Info</label>
    </Typography>
    <form className={classes.hospitalFormRoot} onSubmit={onSubmit}>
      <Grid className={classes.textField} container spacing={2}>
        <Grid item xs={12}>
        <CustomInputs
          id="fullname"
          label="Full name"
          name="fullname"
          type="text"
          value={formData.fullname}
          onChange={handleFormValueChange}
          required
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
          required
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
        required
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
          required
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
          required
        />
       </Grid>
        <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" className={classes.passwordRoot}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={formData.showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange('password')}
                    required
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {formData.showPassword ? <Visibility /> : <VisibilityOff />}
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
              value={formData.confirmPassword}
              onChange={handleFormValueChange}
              required           
              error={passwordMatched}
              fieldBlur={handlePasswordMatched}
              errorText={passwordMatched ? 'Password mismatched!' : null}
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
          disabled={!checked}
        >
          Sign Up
      </Button>
      {formData.error && <p className="error-text">{formData.error.message}</p>}
      {isCommiting && <LinearProgress /> }
      <hr />
      <p className="login-toggler">Already have an Account? <Link underline="none" href="/login" color="secondary">&nbsp;Login </Link></p>      
    </form>
  </div>
   </Container>) : <EmailConfirmation user={user} /> }
</div>
  );
}

export default compose(withRouter,withFirebase)(IndividualAccount);