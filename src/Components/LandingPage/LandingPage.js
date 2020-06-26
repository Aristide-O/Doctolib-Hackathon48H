import React from 'react';
import { NavLink } from 'react-router-dom'
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
    <div className='globalDiv'>
      <div className="loginButton">
      <NavLink to="/ConnectionPage">
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Login
        </Button>
      </NavLink>
      </div>
    <div className="landingPage-flex">
      <div className="content-landingPage">
      <p className="title-landingPage">
        Health e-Book
      </p>
      {/* <div className='alreadyRegistered'>
      <p>Already Registered?</p>
      </div> */}
      <div className="Buttons-landingPage">
      <NavLink to="/Inscription">
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Particulier
        </Button>
      </NavLink>

      <NavLink to="/Inscription">
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Professional
        </Button>
      </NavLink>
      </div>
      </div>
    </div>
    </div>
  );
}
