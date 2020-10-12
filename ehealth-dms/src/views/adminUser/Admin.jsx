import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Typography from '@material-ui/core/Typography/Typography';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { CustomInputs } from '../../components/general/customStyles/CustomStyles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


export default function AdminUser(props) {
  const classes = Usestyles();
 
  const [checked, setChecked] = useState(true);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
 const handleCheckChanged = (e) => {
    setChecked(e.target.checked);
  };
  return (
      <div className={classes.formPaper}>
            <Avatar className={classes.avatar}>
              <VpnKeyIcon />
            </Avatar>
        <Typography component="h1" variant="h3">
          <label className="custom-label">Create Login Credential</label>
        </Typography>

        <form className={classes.hospitalFormRoot}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomInputs
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={props.email}
              onChange={props.handleChange}
              error={(props.isDirty && !props.email) ? true : false}
            />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" className={classes.passwordRoot}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                      id="outlined-adornment-password"
                      type={props.showPassword ? 'text' : 'password'}
                      value={props.password}
                      name="password"
                      onChange={props.handleChange}
                      error={(props.isDirty && !props.password) ? true : false}
                      endAdornment={
                      <InputAdornment position="end">
                          <IconButton
                          aria-label="toggle password visibility"
                          onClick={props.handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          >
                          {props.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                      }
                      labelWidth={70}
                  />
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <CustomInputs
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={props.confirmPassword}
              onChange={props.handleChange}
              error={props.passwordMatched}
              fieldBlur={props.handlePasswordMatched}
              errorText={props.passwordMatched ? 'Password mismatched!' : null}
            />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
              className={classes.checkboxLabel}
                defaultChecked
                control={<Checkbox value="sendEmails" checked={checked}
                onChange={handleCheckChanged} />}
                label= 'An email will be sent to this user to complete registration.'
              />
            </Grid>
          </Grid>
        </form>
      </div>
  );
}
