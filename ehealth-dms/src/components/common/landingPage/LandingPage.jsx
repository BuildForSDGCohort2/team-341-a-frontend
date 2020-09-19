import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Redirect } from 'react-router-dom';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import { AddHospital, InitEmployee, AdminUser, CustomStepper, EntityAccount } from 'components';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CustomTypography, CustomButton } from '../../general/customStyles/CustomStyles';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LandingPageHeader from './LandingPageHeader';
import Paper from '@material-ui/core/Paper';

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
<div className={classes.landingPageStyling} >
<LandingPageHeader />
<Grid item xs={12}>
  <Paper className={classes.headerStepper} elevation={0}>
      <CustomStepper
      steps={steps}
      activeStep={activeStep}
      />
  </Paper>
</Grid>
<Grid item xs={12}>
  <Paper className={classes.headerDescription} elevation={0}>
  <Container fixed maxWidth="md">
    <p className="heading-description">SDG Cohort 2 Project<br/><span>eHealth Delivery Management System</span><br/>Your healthcare solution</p>
  </Container>
  </Paper>
</Grid>
<Container fixed className={classes.containerRoot} maxWidth="md">
<CssBaseline />
    <EntityAccount
      activeStep={activeStep} 
      handleBack={handleBack}
      handleNext={handleNext}
      steps={steps}
    />
  {/* <Grid container spacing={3} direction="row" justify="center" alignItems="center">
    <Grid item md={6}>
      <Grid container justify="center">
        <div className={classes.instructions}>{getStepContent(activeStep)}</div>
          <Box display="flex" justifyContent="center" m={1} p={1}>
              <Button 
                variant="outlined" 
                color="default"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                startIcon={<SkipPreviousIcon />}
                >
                Previous
              </Button>
              <Button 
              endIcon={<SkipNextIcon />}
              variant="outlined" 
              color="secondary" 
              onClick={handleNext}
              className={classes.backButton}
              >
              {activeStep === steps.length - 1 ? 'Create Account' : 'Next'}
              </Button>
            </Box>
      </Grid>
    </Grid>
    </Grid> */}
    </Container>
    </div>
  );
}
