import React from 'react';
import 
{ 
    Grow, 
    Paper, 
    Popper, 
    ClickAwayListener, 
    MenuList,
    MenuItem, 
    Menu, 
    Badge, 
    IconButton 
}
from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

export function renderMenu (popOpen, anchorRef, handleListKeyDown, handlePopClose) {
    return <Popper open={popOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal onKeyDown={handleListKeyDown}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handlePopClose}>
                  <MenuList autoFocusItem={popOpen} id="menu-list-grow">
                    <MenuItem onClick={handlePopClose}>Profile</MenuItem>
                    <MenuItem onClick={handlePopClose}>My account</MenuItem>
                    <MenuItem onClick={handlePopClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
};

export function renderMobileMenu(mobileMenuId, mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen) {
    return <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  };