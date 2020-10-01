import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Usestyles } from 'components';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from '@material-ui/core/Link';
import { Paper, Typography, Box } from '@material-ui/core';
import { withFirebase  } from '../../../../firebase';
import LinearProgress from '@material-ui/core/LinearProgress';

function EmailConfirmation(props) {

  const classes = Usestyles();
  const [error, setError] = useState(null);
  const [isCommiting, setIsCommiting] = useState(false);

  const onReSendEmail = e => { 
    setIsCommiting(true); 
    e.preventDefault();
    props.firebase
      .resendEmailVerification(props.user)
      .then((data) => {
        setIsCommiting(false);
      })
      .catch(err => {
        setIsCommiting(false);
        setError(err);
      }).catch(err => {
        setIsCommiting(false);
        setError(err);
      });
  };

  return (
    <div className="animate-email-paper">
    <div className={classes.emaimConfirm}>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
    <Paper className={classes.centerPaper}>
        <Avatar className={classes.avatar}>
            <MailOutlineIcon />
        </Avatar>
          <Typography variant="h5" gutterBottom>
          Verify your email address to continue
        </Typography>
        <form>
          <Grid container>     
            <Grid item xs={12}>
                <Typography>
                    
            <label className="custom-label-text"> We've sent an email containing a verification link to {props.user.email}. It will expire shortly, so please check your email and click on the link to complete your account setup.
                </label>
             </Typography>
            </Grid>
          </Grid>
      {error && <p className="error-text">{error.message}</p>}
      {isCommiting && <LinearProgress /> }
        <hr />
      <p className="login-toggler">Didn't get the email?<Link underline="none" href="#" onClick={onReSendEmail} color="secondary">&nbsp;Resend email?</Link></p>
      </form>
    </Paper>
  </Grid>
  </div>
  </div>
  );
}

export default withFirebase(EmailConfirmation);
