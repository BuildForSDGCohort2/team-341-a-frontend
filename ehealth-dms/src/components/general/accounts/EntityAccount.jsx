import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import { AddHospital, InitEmployee, AdminUser, CustomStepper } from 'components';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
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

export default function EntityAccount(props) {
  
  const classes = Usestyles();
  return (
<>
  <Grid container spacing={3} direction="row" justify="center" alignItems="center">
    <Grid item md={6}>
      <Grid container justify="center">
        <div className={classes.instructions}>{getStepContent(props.activeStep)}</div>
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
              onClick={props.handleNext}
              className={classes.backButton}
              >
              {props.activeStep === props.steps.length - 1 ? 'Create Account' : 'Next'}
              </Button>
            </Box>
      </Grid>
    </Grid>
    </Grid>
    </>
  );
}
