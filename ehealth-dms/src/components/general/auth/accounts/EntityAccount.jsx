import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AddHospital, InitEmployee, AdminUser, Usestyles, IndividualAccount } from 'components';
import Box from '@material-ui/core/Box';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { getMapData, errorCallback } from '../../../../helper/googleRequest';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withFirebase  } from '../../../../firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';


function getStepContent(stepIndex, prop, handleEvants) {
  switch (stepIndex) {
    case 0:
      return <AddHospital
      hospitalName={prop.hospitalFormData.hospitalName}
      contactPerson={prop.hospitalFormData.contactPerson}
      contact={prop.hospitalFormData.contact}
      country={prop.hospitalFormData.country}
      state={prop.hospitalFormData.state}
      services={prop.hospitalFormData.services}
      city={prop.hospitalFormData.city}
      checked={prop.hospitalFormData.checked}
      handleFormValueChange={handleEvants.handleHospitalFormValueChange}
      isDirty={prop.hospitalFormData.isDirty}
      handleCheckChanged={handleEvants.handleCheckChanged}
       />
    case 1:
      return <InitEmployee
        handleFormValueChange={handleEvants.handleEmployeeFormValueChange}
        fullName={prop.employeeFormData.fullName}
        dob={prop.employeeFormData.dob}
        gender={prop.employeeFormData.gender}
        phone={prop.employeeFormData.phone}
        email={prop.employeeFormData.email}
        isDirty={prop.employeeFormData.isDirty}
        isValidDoB={prop.employeeFormData.isValidDoB}
       />;
    case 2:
      return <AdminUser
        handleChange={handleEvants.handleAdminFormValueChange}
        handlePasswordMatched={handleEvants.handlePasswordMatched}
        handleClickShowPassword={handleEvants.handleClickShowPassword}
        email={prop.adminData.email}
        password={prop.adminData.password}
        confirmPassword={prop.adminData.confirmPassword}
        showPassword={prop.adminData.showPassword}
        isDirty={prop.adminData.isDirty}
        passwordMatched={prop.adminData.passwordMatched}
       />;
    default:
      return;
  }
}

function EntityAccount(props) {
  const classes = Usestyles();
  const CURRENT_DATE = new Date();

  const initEmployeeFormData = {
    fullName: '',
    gender: '',
    phone: '',
    email: '',
    dob: CURRENT_DATE,
    isDirty: false,
    isValidDoB: true,
    }
  const initHospitalFormData = {
    hospitalName: '',
    contactPerson: '',
    contact: '',
    country: '',
    state: '',
    services: '',
    city: '',
    checked: false,
    isDirty: false,
    latlong: {}
    }
    const adminCredential = {
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,   
      isDirty: false,
      passwordMatched: false,
      isAdmin: true
    }
 
    const [employeeFormData, setEmployeeFormData] = useState(initEmployeeFormData);
    const [hospitalFormData, setHospitalFormData] = useState(initHospitalFormData);
    const [adminData, setAdminCredential] = useState(adminCredential);
    const [isCommiting, setIsCommiting] = useState(false);
    const [error, setError] = useState(null);
    
     const handleEmployeeFormValueChange = ({ target: { name, value } }) => {
      let newValue = name === "contact" ? value.trim().replace(/\s+/g, "") : value;
      
      if (name === 'dob') {
        setEmployeeFormData((s) => ({
          ...s,
          [name]: newValue,
          isValidDoB: CURRENT_DATE.getFullYear() - new Date(newValue).getFullYear() >= 18
        }));
      } else {
        setEmployeeFormData((s) => ({
          ...s,
          [name]: newValue,
        }));
      }
    };
     const handleHospitalFormValueChange = ({ target: { name, value } }) => {
      let newValue = name === "contact" ? value.trim().replace(/\s+/g, "") : value;
      setHospitalFormData((s) => ({
        ...s,
        [name]: newValue,
      }));
    };

    const handleAdminFormValueChange = ({ target: { name, value } }) => {
      setAdminCredential((s) => ({
        ...s,
        [name]: value,
      }));

      if (adminData.passwordMatched && name === "confirmPassword") {
        setAdminCredential((s) => ({
          ...s,
          passwordMatched: adminData.password !== value,
        }));
      }
    }

    const handleClickShowPassword = () => {
      setAdminCredential({ ...adminData, showPassword: !adminData.showPassword });
    };

    const handleSetError  = (e) => {
      let isFormDirty = false; 
      getMapData(locData, errorCallback)
      e.preventDefault();
      if (props.activeStep === 0) {
        Object.keys(hospitalFormData).forEach(key => {
          if (hospitalFormData[key] === null || hospitalFormData[key] === '') {
            isFormDirty = true;
            setHospitalFormData((s) => ({
              ...s,
              isDirty: true,
            }));
          }            
        });

        if (!isFormDirty && hospitalFormData.checked) {
          props.handleNext();
        } else {
          setHospitalFormData((s) => ({
            ...s,
            isDirty: true,
          }));
        }
      }
      else if(props.activeStep === 1) {
          Object.keys(employeeFormData).forEach(key => {
            if (employeeFormData[key] == null || employeeFormData[key] === '') {
              isFormDirty = true;
              
              setEmployeeFormData((s) => ({
                ...s,
                isDirty: true,
              }));
            }            
          });

          if (!isFormDirty) {
            props.handleNext();
          }
      } else if (props.activeStep === 2) {
        Object.keys(adminData).forEach(key => {
          if (adminData[key] === null || adminData[key] === '') {
            isFormDirty = true;
            setAdminCredential((s) => ({
              ...s,
              isDirty: true,
            }));
          }            
        });

        if (!isFormDirty && !adminData.passwordMatched) {
          setIsCommiting(true);
          employeeFormData.password = adminData.password;
          employeeFormData.avatar = '';
          props.firebase
          .createHospitals(hospitalFormData)
          .then(authUser => {
            props.firebase
            .createUser(employeeFormData);
          }).then(res => {
            setAdminCredential(adminData);
            setEmployeeFormData(initEmployeeFormData);
            setHospitalFormData(initEmployeeFormData);
            setIsCommiting(false);
            props.history.push({
              pathname: '/individual-account',
              state: { isAdminUser: {email: adminData.email} }
            })
          })
          .catch(err => {
            setIsCommiting(false);
            setError(err);
          });
        }
      }
      else {
        props.handleNext();
      }
    }
    useEffect(() => {
      setHospitalFormData((s) => ({
        ...s,
        city: "",
      }));
    }, [hospitalFormData.state]);

    const handleCheckChanged = (e) => {
      setHospitalFormData((s) => ({
        ...s,
        checked: !hospitalFormData.checked,
      }));
    };
    const locData = (position) => {
      setHospitalFormData(s => ({...s, latlong: {lat: position.coords.latitude, long: position.coords.longitude}}));
    };
    const handlePasswordMatched = () => {
      setAdminCredential((s) => ({
        ...s,
        passwordMatched: adminData.password !== adminData.confirmPassword
      }));
    }
    const functions = {handleHospitalFormValueChange, handleEmployeeFormValueChange, handleCheckChanged, handleAdminFormValueChange, handlePasswordMatched, handleClickShowPassword};
    const formData = { hospitalFormData, employeeFormData, adminData }

  return (
<>
  <Grid container spacing={3} direction="row" justify="center" alignItems="center">
    <Grid item xs={12}>
      <Grid container justify="center">
        <div className={classes.instructions}>{getStepContent(props.activeStep, formData, functions)}</div>
          <Box display="flex" justifyContent="center" m={1} p={1}>
              <Button 
                variant="outlined" 
                color="default"
                disabled={props.activeStep === 0}
                onClick={props.handleBack}
                className={classes.backButton}
                startIcon={<SkipPreviousIcon />}
                >
                Previous
              </Button>
              <Button 
              endIcon={<SkipNextIcon />}
              variant="outlined" 
              color="secondary" 
              onClick={handleSetError}
              className={classes.backButton}
              type="submit"
              >
              {props.activeStep === props.steps.length - 1 ? 'Create Account' : 'Next'}
              </Button>
            </Box>
          {error && <p className="error-text">{error.message}</p>}
          {isCommiting && <LinearProgress /> }
      </Grid>
    </Grid>
    </Grid>
    </>
  );
}
export default compose(withRouter, withFirebase)(EntityAccount);
