import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { AccountPageHeader, EntityAccountStepper, EntityAccount, Usestyles } from 'components';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

function getSteps() {
  return ['Register Hospital', 'Add Admin User', 'Create Admin Login'];
}

export default function LegalEntityAccountComponent(props) {
  
  const classes = Usestyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 2) {
      // props.history.push('/app');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
<div className={classes.landingPageStyling} >
<AccountPageHeader />
<Grid item xs={12}>
  <Paper className={classes.headerStepper} elevation={0}>
      <EntityAccountStepper
      steps={steps}
      activeStep={activeStep}
      />
  </Paper>
</Grid>
<Grid item xs={12}>
  <Paper className={classes.headerDescription} elevation={0}>
  <Container fixed maxWidth="sm">
    <p className="heading-description">SDG Cohort 2 Project<br/><span>eHealth Delivery Management System</span><br/>Your healthcare solution</p>
  </Container>
  </Paper>
</Grid>
<Container fixed className={classes.containerRoot} maxWidth="sm">
<CssBaseline />
    <EntityAccount
      activeStep={activeStep} 
      handleBack={handleBack}
      handleNext={handleNext}
      steps={steps}
    />
    <hr />
    <p className="login-toggler">Already have an Account? <Link underline="none" href="/login" color="secondary">&nbsp;Login </Link></p>
</Container>
</div>
  );
}
