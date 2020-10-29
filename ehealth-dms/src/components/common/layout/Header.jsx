import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputAdornment,
  Badge,
  Button,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Usestyles } from "components";
import StyledInput from "../composables/Input";
import StyledButton from "../composables/Button";

export default function Header(props) {
  const classes = Usestyles();
  console.log("###:", props);
  return (
    <AppBar
      position="sticky"
      className={clsx(classes.appBar, classes.background, {
        [classes.appBarShift]: props.openDrawer,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.onDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: props.openDrawer,
          })}
        >
          {props.isOnHome ? "" : <MenuIcon />}
        </IconButton>
        {props.isOnHome ? <Avatar className={classes.logo}>H</Avatar> : ""}
        <Typography className={classes.title} variant="h5" noWrap>
          cares
        </Typography>
        <div className={classes.search}>
          <StyledInput
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <StyledButton className={classes.btnDefault} linkto="/login">
            Login
          </StyledButton>
          <StyledButton className={classes.btnPrimary} linkto="/individual-account">
            Register
          </StyledButton>
          {props.isOnHome && props.isLoggedIn && (
            <>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={props.menuId}
                aria-haspopup="true"
                onClick={props.onProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </>
          )}
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={props.mobileMenuId}
            aria-haspopup="true"
            onClick={props.onMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
