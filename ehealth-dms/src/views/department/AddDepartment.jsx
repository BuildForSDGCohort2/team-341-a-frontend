import React, { Component } from 'react';
import { Container, Avatar, Typography, Grid, TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Usestyles } from 'components';


class AddDepartment extends Component {

  render () {
  return ( 
       <React.Fragment>
         <NewDepartment />
       </React.Fragment>
   );

  }
}

function NewDepartment() {
  const classes = Usestyles()
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.formPaper}>
        <Avatar className={classes.avatar}>
          <AddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a new Department
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="dname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="dname"
                label="Department Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="did"
                label="ID"
                name="id"
                autoComplete="did"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="hid"
                label="Hospital ID"
                type="hid"
                id="hid"
                autoComplete="current-phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Description"
                name="description"
                autoComplete="description"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            size="large"
            color="secondary"
            className={classes.submit}
          >
            Add Department
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default AddDepartment;