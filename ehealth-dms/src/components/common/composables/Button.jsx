import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const styles = {
  root: {
    height: 40,
    padding: "8px 16px",
    marginBottom: 0,
    userSelect: "none",
    touchAction: "manipulation",
    border: "1px solid transparent",
    borderRadius: 3,
    lineHeight: "24px",
  },
};

function StyledButton(props) {
  const { classes, children, className, ...other } = props;
  let history = useHistory();

  function handleClick() {
    if (props.linkto) history.push(props.linkto);
  }

  return (
    <Button
      onClick={handleClick}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </Button>
  );
}

export default withStyles(styles)(StyledButton);
