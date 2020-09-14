import React, {useState } from 'react';
import clsx from 'clsx';
import {
  useTheme,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemText,
  Icon,
  Collapse
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { Link as RouterLink } from 'react-router-dom';
import { Usestyles } from 'components';
import { RenderMobileMenu, CustomizedMenus } from 'components';
import Header from './Header';
import { Footer } from "components";

export default function LayoutComponent(props) {
  const classes = Usestyles();
  const theme = useTheme();
  const [openDrawer, setDrawerOpen] = useState(true);
  const [toggleClass, handleToggleClass] = useState('icon-styles');
  const [expanded, setExpansion] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  const subMenu = [
    {color: '#1976d2', icon: 'person_search', text: 'Profile'},
    {color: '#007E33', icon: 'settings', text: 'Settings'},
    {color: '#ff4444', icon: 'power_settings_new', text: 'Logout'}
  ]

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleExpansion = (name) => {
    if(openDrawer)
     setExpansion(expanded === name ? false : name);
  }

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    handleToggleClass('icon-styles');
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    handleToggleClass('collapsed-drawer');
    setExpansion(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
      <Header
        onDrawerOpen={handleDrawerOpen}
        onProfileMenuOpen={handleProfileMenuOpen}
        mobileMenuId={mobileMenuId}
        onMobileMenuOpen={handleMobileMenuOpen}
        openDrawer={openDrawer}
        menuId={menuId}
      />
      <RenderMobileMenu
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        onMenuOpen={handleProfileMenuOpen}
      />
      <CustomizedMenus
        anchorEl={anchorEl}
        handleClose={handleMenuClose}
        listItems={subMenu}
      />
      <Drawer
        variant= "permanent"
        className={clsx(classes.drawer, classes.background, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx(classes.background, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div className={classes.toolbar}>
        <span className="header-title">Hospital Name</span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.iconColor} /> : <ChevronLeftIcon className={classes.iconColor} />}
          </IconButton>
        </div>
        <List style={{paddingTop: 0 }}>
        {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            if (prop.type === "child") return null;
            if (prop.type === "dropdown")
                return (
                  <li
                    key={key}
                    onClick={() => handleExpansion(prop.name)}
                    className="nav-link"
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
      <Footer openDrawer={openDrawer} fluid />
    </div>
  );
}
