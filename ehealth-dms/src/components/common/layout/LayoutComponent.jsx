import React, {useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Icon,
  InputBase,
  Badge,
  Collapse
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link as RouterLink } from 'react-router-dom';
import { Usestyles } from 'components';
import { renderMenu, renderMobileMenu } from 'components';

export default function LayoutComponent(props) {
  const classes = Usestyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const [popOpen, setPopOpen] = useState(false);
  const [toggleClass, handleToggleClass] = useState('icon-styles');
  const [expanded, setExpansion] = useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl); 
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleExpansion = (name) => {
    if(open)
     setExpansion(expanded === name ? false : name);
  }

  const handleProfileMenuOpen = () => {
    setPopOpen((prevOpen) => !prevOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setPopOpen(false);
    }
  }
  const handlePopClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setPopOpen(false);
  };

  const prevOpen = useRef(popOpen);
  useEffect(() => {
    if (prevOpen.current === true && popOpen === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = popOpen;
  }, [popOpen]);


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
    handleToggleClass('icon-styles');
  };

  const handleDrawerClose = () => {
    setOpen(false);
    handleToggleClass('collapsed-drawer');
    setExpansion(false);
  };

  const children = (child, parent) => {
    var links = [];
    if (child) {
      for (var i = 0; i < child.length; i++) {
         if (!child[i].name.includes("Edit") && !child[i].name.includes("Hospital") && !child[i].name.includes("Profile") && child[i].name !== "Patient") {
            links.push(
              <div
                key={i} 
                className="sub-items"
                >
                <ListItem button component={RouterLink} to={child[i].path}>
                    <ListItemText ><span className="collapse-label">{child[i].name}</span></ListItemText>
                </ListItem>
              </div>
            ); 
      }
      }
      return <List component="div" disablePadding>{links}</List>
    }
  };

  return (
    <div className={classes.root}>
      <AppBar 
       position="fixed"
       className={clsx(classes.appBar, {
         [classes.appBarShift]: open,
       })}
      >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Team 341-A
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              ref={anchorRef}
              aria-controls={popOpen ? 'menu-list-grow' : undefined}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu(mobileMenuId, mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen)}
      {renderMenu(popOpen, anchorRef, handleListKeyDown, handlePopClose)}

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <span className="header-title">Hospital Name</span>
        </div>
        <Divider />
       
        <List>
        {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            if (prop.type === "child") return null;
            if (prop.type === "dropdown")
                return (
                  <li
                    key={key}
                    onClick={() => handleExpansion(prop.name)}
                  >
                    <ListItem button >
                      <Icon className="icon-styles" style={{ color: prop.color }}>{prop.icon}</Icon>
                      <ListItemText className={toggleClass} ><span className="list-label">{prop.name}</span></ListItemText>
                      { expanded === prop.name ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
                    </ListItem>                   

                    <Collapse in={ expanded === prop.name } timeout="auto" unmountOnExit={true}>
                      {children(prop.child, prop.parentid)}
                    </Collapse>
                  </li>
                )

              return (
                <li
                key={key}
                >
                <ListItem button component={RouterLink} to={prop.path}>
                    <Icon className="icon-styles" style={{ color: prop.color }}>{prop.icon}</Icon>
                    <ListItemText className={toggleClass} ><span className="list-label">{prop.name}</span></ListItemText>
                </ListItem>
                </li>
             )
         })}
        </List>
      </Drawer>
    </div>
  );
}
