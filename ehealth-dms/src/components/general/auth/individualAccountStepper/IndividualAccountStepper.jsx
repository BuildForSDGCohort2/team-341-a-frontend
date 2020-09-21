import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import StepConnector from '@material-ui/core/StepConnector';
import PropTypes from 'prop-types';
import { Usestyles } from 'components';
import Container from '@material-ui/core/Container';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 14,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 2,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

function getSteps() {
  return ['Create Account', 'Confirm Email'];
}

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#929fba',
    zIndex: 1,
    color: '#fff',
    width: 34,
    height: 34,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <PersonAddIcon />,
    2: <MailOutlineIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const IndividualAccountStepper = (props) => { 
  const classes = Usestyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      props.history.push('/app');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return ( 
    <Container fixed maxWidth="lg">
      <Stepper alternativeLabel activeStep={props.activeStep} className={classes.iStepperBackground} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <p className="page-heading">You are only one steps away from getting your account setup</p>
    </Container>
   );
}
 
export default IndividualAccountStepper;