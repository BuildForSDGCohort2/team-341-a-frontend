import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Menu,
    Icon,
    MenuItem,
    ListItemText
} from '@material-ui/core';
import { withFirebase  } from '../../../firebase';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))(MenuItem);

export const CustomizedMenus = withFirebase(props => {

  const signOut = () => {
    props.firebase.signOut()
    .then((res) =>{
      props.handleClose();
    })
  };

  return (
    <div>
      <StyledMenu
        id="customized-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
    {props.listItems.map((item, key) => {
        return <dt  key={key}>
        <StyledMenuItem onClick={item.text === "Logout" ? signOut : props.handleClose}>
          <Icon style={{ color: item.color, paddingRight: 8 }}>{item.icon}</Icon>
            <ListItemText><span>{item.text}</span></ListItemText>
        </StyledMenuItem>
        </dt>
    })}
      </StyledMenu>
    </div>
  );
});
