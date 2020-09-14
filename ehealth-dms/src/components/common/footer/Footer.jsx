// import React from 'react';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Usestyles } from 'components';
import clsx from 'clsx';

export default function Footer(props) {
    const classes = Usestyles();

  return (
    <div className="footer-bottom">
      <Paper elevation={0}
       position="fixed"
       className={clsx(classes.appBar, {
         [classes.appBarShift]: props.openDrawer,
       })}
       >
        <div className="copyright">
            &copy; 2020-{(new Date()).getFullYear()},&nbsp;&nbsp;<a href="#!" target="_blank" rel="noopener noreferrer"> SDG Cohort 2 Team 341-A </a>
        </div>
       </Paper>
    </div>
  );
}

