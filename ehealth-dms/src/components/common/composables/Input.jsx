import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const styles = {
  root: {
    height: 40,
    // width: "312.89px",
    padding: "12px 24px",
    marginBottom: 0,
    border: "1px solid #C4C4C4",
    borderRadius: 5,
    "&:hover": {
      border: "1px solid #C4C4C4"
    },
    focused: {
      "&$focused": {
        border: "5px solid red"
      },
      // border: "1px solid #B39FDF"
    }
  },
};

function StyledInput(props) {
  const { classes, className, ...other } = props;
  let history = useHistory();

  function handleClick() {
    if (props.linkto) history.push(props.linkto);
  }

  return (
    <InputBase
      className={clsx(classes.root, className)}
      {...other}
    />
  );
}

export default withStyles(styles)(StyledInput);
