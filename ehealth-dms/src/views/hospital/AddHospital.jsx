import React, { useEffect, useState } from 'react';
import { Usestyles } from '../../components';
import TextField from '@material-ui/core/TextField/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { countries } from "../../variables/countries.jsx";


export default function AddHospital() {
  const countryList = countries.map((item, i) => {
    return <option key={i}>{item.country}</option>;
  });
  const initFormData =     {
    country: '',
    state: '',
    city: '',
    }
  const classes = Usestyles();
  const [provinceList, setProvinceList] = useState([]);
  const [formData, setFormData] = useState(initFormData);
  const handleFormValueChange = ({ target: { name, value } }) => {
    let newValue = name === "contact" ? value.trim().replace(/\s+/g, "") : value;
    setFormData((s) => ({
      ...s,
      [name]: newValue,
    }));
  };
  useEffect(() => {
    const provinceOptionsForCountry = (country) => {
      let plist = [];
      countries.forEach((item, i) => {
        if (country === item.country) {
          plist = item.province.map((region, index) => {
            return <option key={index + 1}>{region.name}</option>;
          });
        }
      });
      plist.unshift(<option key={0} value="" disabled></option>)
      return plist;
    };
    setProvinceList(provinceOptionsForCountry(formData.country));
  }, [formData.country]);

  useEffect(() => {
    setFormData((s) => ({
      ...s,
      city: "",
    }));
  }, [formData.state]);

  return (
    <form className={classes.hospitalFormRoot}>
      <Grid className={classes.textField} container spacing={2}>
        <Grid item xs={12}>
             <TextField
                variant="outlined"
                required
                fullWidth
                id="hname"
                label="Hospital name"
                name="hospitalname"
                type="text"
              />
        </Grid>
        <Grid item xs={12}>
          <TextField
                variant="outlined"
                required
                fullWidth
                id="services"
                label="Services offered"
                name="services"
                type="text"
              />
        </Grid>
        <Grid item xs={12}>
             <TextField
                variant="outlined"
                required
                fullWidth
                id="contactperson"
                label="Contact Person"
                name="contactPerson"
                type="text"
              />
        </Grid>
        <Grid item xs={12}>
          <TextField
                variant="outlined"
                required
                fullWidth
                id="contactnumber"
                label="Emergency Contact number"
                name="contact"
                type="text"
              />
        </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined" className={classes.textField}>
        <InputLabel htmlFor="country">Select Country</InputLabel>
        <Select
          native
          onChange={handleFormValueChange}
          value={formData.country}
          label="Select Country"
          inputProps={{
            name: 'country',
            id: 'country',
          }}
        >
          <option aria-label="" value="" disabled />  
          {/* Select Country</option> */}
          {countryList}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined" className={classes.textField}>
          <InputLabel htmlFor="state">Select State</InputLabel>
          <Select
            native
            onChange={handleFormValueChange}
            value={formData.state}
            label="Select State"
            inputProps={{
              name: 'state',
              id: 'state',
            }}
          >
            {provinceList}
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleFormValueChange}
              />
        </Grid>
      </Grid>
    </form>
  );
}
