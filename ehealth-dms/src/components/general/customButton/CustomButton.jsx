import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

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

export default function CustomButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant={props.variant} color={props.color} onClick={props.onClick}>{props.text}</Button>
    </ThemeProvider>
  );
}
