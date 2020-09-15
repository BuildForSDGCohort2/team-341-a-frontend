import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const CssTextField = withStyles({
  root: {
    '& label.MuiInputLabel-root': {
      color: '#ffffff', //'#ff4081',
      fontWeight: 500
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#59698d',
        border: '2px solid'
      },
      '&:hover fieldset': {
        borderColor: '#9933CC',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#9933CC',
      }
    },
      '&:hover label': {
        color: '#9933CC',
      },
      '& .MuiInputBase-multiline': {
        fontWeight: 700,
        fontSize: '1.05rem',
        color: '#1c2a48'
      }
  },
})(TextField);

const useStyles = makeStyles({
  root: {
    textAlign: 'left',
    "& .MuiOutlinedInput-input": {
      fontWeight: 700,
      fontSize: '1.05rem',
      color: '#1c2a48 !important'
    },
    "& .MuiInputLabel-root": {
      color: "#ffffff",   
      fontWeight: 500
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#59698d",
      border: '2px solid'
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#9933CC"
    },
    "&:hover .MuiInputLabel-root": {
      color: "#9933CC"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9933CC"
    },
  },
  input: { 
  '&::placeholder': {
   color: '#1c2a48',
    fontWeight: 600
  }
  },
});
const WhiteTextTypography = withStyles((theme) => ({
  root: {
    color: "#ec407a",
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      },
      fontWeight: 500
  },
}))(Typography);

export function CustomButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant={props.variant} color={props.color} onClick={props.onClick}>{props.text}</Button>
    </ThemeProvider>
  );
}
export function CustomInputs(props) {
  return <CssTextField
        label={props.label}
        variant="outlined"
        id="custom-css-outlined-input"
        fullWidth
        id={props.id}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        InputLabelProps={{
          shrink: props.shrink,
        }}
        multiline={props.multiline}
        placeholder={props.placeholder}
        InputProps={{
          classes: { input: useStyles().input}
        }}
      />
}

export function CustomSelect(props) {
  const classes = useStyles();
  return (
      <TextField
        className={classes.root}
        value={props.value}
        onChange={props.onChange}
        variant="outlined"
        label={props.label}
        fullWidth
        id={props.id}
        name={props.name}
        select
      >
        <MenuItem value="" disabled>
          <em>{props.defaultValue}</em>
        </MenuItem>
        {props.options.map((option, index) => <MenuItem key={index} value={option}>{option}</MenuItem>)}
      </TextField>
  );
}
export function CustomTypography(props) {
  return (
    <>
      <WhiteTextTypography 
      align='justify' 
      paragraph
    >
      {props.text}
    </WhiteTextTypography>
    </>
  );
}