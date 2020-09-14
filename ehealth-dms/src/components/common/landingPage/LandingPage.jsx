import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Switch, Redirect } from 'react-router-dom';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import { AddHospital, InitEmployee, AdminUser, CustomButton } from 'components';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {StepperHeader} from 'components';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

function getSteps() {
  return ['Register your Hospital', 'Add Employee', 'Create Admin User'];
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

export default function LandingPage() {
  
  const classes = Usestyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmitForms = () => {
    setActiveStep(0);
  };

  return (
<div className={classes.grow, "bgimg"} >
{/* <Grid container direction="row" justify="center" alignItems="stretch" className="bgc"> */}
<Container fixed>
<CssBaseline />
  <Grid container spacing={3} direction="row" justify="center" alignItems="center">
   <Grid item xs={12}>
      {/* <Paper className={classes.stepperPaper}> */}
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>
      {/* </Paper> */}
    </Grid>
    <Grid item xs={6}>
      <Grid container justify="center">
        {/* <Paper className={classes.customPaper}> */}
        <div className={classes.instructions}>{getStepContent(activeStep)}</div>
          <Box display="flex" justifyContent="center" m={1} p={1}>
              <Button 
                variant="contained" 
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                >
                Previous
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={handleNext}
                className={classes.backButton}
                disabled={activeStep === 2}
                >
                {activeStep === steps.length - 1 ? 'Create Account' : 'Next'}
              </Button>
            </Box>
        {/* </Paper> */}
      </Grid>
    </Grid>
    <Grid item xs={6}>
      {/* <Paper className={classes.stepperPaper}> */}
        <Typography>
            The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: output(spacing) = spacing * 8px, e.g. spacing={2} creates a 16px wide gap.
        </Typography>
      {/* </Paper> */}
    </Grid>
    </Grid>
    </Container>
    {/* </Grid> */}
    </div>
  );
}
