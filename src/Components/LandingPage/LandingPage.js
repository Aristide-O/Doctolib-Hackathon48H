import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import "./LandingPage.css"

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className="landingPage-flex">
      <div className="content-landingPage">
      <p className="title-landingPage">
        Health e-Book
      </p>
      <div className="Buttons-landingPage">
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Particulier
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Login
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Professionnal
        </Button>
      </div>
      </div>
    </div>
  );
}
