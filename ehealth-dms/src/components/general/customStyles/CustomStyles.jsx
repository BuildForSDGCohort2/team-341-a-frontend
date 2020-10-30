import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#76ff03",
    },
  },
});

const CssTextField = withStyles({
  root: {
    "& .MuiInputBase-multiline": {
      fontWeight: 700,
      fontSize: "1.05rem",
      color: "#1c2a48",
    },
  },
})(TextField);

const useStyles = makeStyles({
  root: {
    textAlign: "left",
    "& .MuiOutlinedInput-input": {
      fontWeight: 700,
      fontSize: "1.05rem",
      color: "#1c2a48 !important",
    },
  },
  input: {
    "&::placeholder": {
      color: "#1c2a48",
      fontWeight: 600,
    },
  },
});
const WhiteTextTypography = withStyles((theme) => ({
  root: {
    color: "#1c2331",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    fontWeight: 500,
    lineHeight: 2,
  },
}))(Typography);

export function CustomButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        endIcon={<props.icon />}
        variant={props.variant}
        color={props.color}
        onClick={props.onClick}
        className={props.class}
      >
        {props.text}
      </Button>
    </ThemeProvider>
  );
}
export function CustomInputs(props) {
  return (
    <CssTextField
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
        classes: { input: useStyles().input },
      }}
      helperText={props.errorText}
      error={props.error}
      onBlur={props.fieldBlur}
    />
  );
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
      {props.options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
export function CustomTypography(props) {
  return (
    <>
      <WhiteTextTypography align="justify" paragraph>
        {props.text}
      </WhiteTextTypography>
    </>
  );
}

export const globalTheme = createMuiTheme({
    typography: {
      fontFamily: "Lato",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": ["Lato"],
        },
      },
    },
  });