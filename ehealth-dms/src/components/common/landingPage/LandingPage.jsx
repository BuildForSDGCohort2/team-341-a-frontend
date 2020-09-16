import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Redirect } from 'react-router-dom';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import { AddHospital, InitEmployee, AdminUser, CustomStepper } from 'components';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CustomTypography, CustomButton } from '../../general/customStyles/CustomStyles';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

function getSteps() {
  return ['Register your Hospital', 'Add Admin User', 'Create Admin Login'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <AddHospital />
    case 1:
      return <InitEmployee />;
    case 2:
      return <AdminUser />;
    default:
      return;
  }
}

export default function LandingPage(props) {
  
  const classes = Usestyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 2) {
      props.history.push('/app');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
<div className={classes.grow, "bgimg"} >
<Container fixed className={classes.containerRoot}>
  <div className="animate__animated animate__zoomIn animate__infinite animate__delay-0.5s animate__slower 30s"><p><h1 className="page-heading h1">Team 341-A </h1><span className="page-heading span">eHealth Delivery Management System</span></p></div>
<CssBaseline />
  <Grid container spacing={3} direction="row" justify="center" alignItems="center">
   <Grid item xs={12}>
      <CustomStepper
      steps={steps}
      activeStep={activeStep}
      />
    </Grid>
    <Grid item md={6}>
        <CustomTypography 
          text="Good healthcare delivery system is key to the wellbeing of any nation. However, governments are still searching for ways to improve equity, efficiency, effectiveness, and responsiveness of their health systems, particularly on the African Continent."
        />
        <CustomTypography 
          text="Moreover, countries that have managed to gain a bit of improvements in their healthcare delivery systems still experience unnecessary deaths of citizens because of lack of technological advances to easily locate the nearest healthcare facility in time of emergency. Patients sometimes die due to longer routes taken to get to medical centers.
          "
        />
        <CustomTypography 
          text=" Giving these challenges, this app seeks to provide solutions that will provide quick and easy access to health facilities and improve the standards of quality healthcare in Africa. The app will pull out healthcare organizations from inefficient traditional concepts and utilize technology/tools to perform efficiently and hence generate better quality results.
          "
        />
    </Grid>
    <Grid item md={6}>
      <Grid container justify="center">
        <div className={classes.instructions}>{getStepContent(activeStep)}</div>
          <Box display="flex" justifyContent="center" m={1} p={1}>
              <Button 
                variant="outlined" 
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                startIcon={<SkipPreviousIcon />}
                >
                Previous
              </Button>
              <CustomButton 
              icon={SkipNextIcon}
              variant="outlined" 
              color="primary" 
              onClick={handleNext}
              class={classes.backButton}
              text={activeStep === steps.length - 1 ? 'Create Account' : 'Next'}
              />
            </Box>
      </Grid>
    </Grid>
    </Grid>
    </Container>
    </div>
  );
}
