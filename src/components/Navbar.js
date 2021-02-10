import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
  typographyStyles: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  gridStyles: {
    justifyContent: "flex-end",
  },

  linkStyles: {
    textDecoration: "none",
    color: 'white',
    fontWeight: "bold"
  },
}))

const logout = () => {
  localStorage.clear();
  window.location.reload();
}

const Navbar = () => {
  const classes = useStyles();


  return (
    <nav>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            <Link className={classes.linkStyles} to="/">Invy App</Link>
            <Grid container className={classes.gridStyles} spacing={2}>
              <Grid item>
                <Link  className={classes.linkStyles} to="/Data">Articles</Link>
              </Grid>
              <Grid item>
                <Link  className={classes.linkStyles} to="/Todo">Mes tâches</Link>
              </Grid>
              <Grid item>
              <Link className={classes.linkStyles} to="/" onClick={() => logout()}>Se déconecter</Link>
              </Grid>
            </Grid>
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default Navbar;
