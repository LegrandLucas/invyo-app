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

const Navbar = () => {
  const classes = useStyles();


  return (
    <nav>
      <AppBar position="sticky" color="primary">
        <Toolbar xs={12}>
          <Typography className={classes.typographyStyles}>
            <h1 xs={2}>
              <Link className={classes.linkStyles} to="/">Invy App</Link>
            </h1>
              <Grid container className={classes.gridStyles} xs={10} spacing={2}>
                <Grid item>
                  <Link  className={classes.linkStyles} to="/Data">Articles</Link>
                </Grid>
                <Grid item>
                  <Link  className={classes.linkStyles} to="/Todo">Mes tâches</Link>
                </Grid>
                <Grid item>
                <Link className={classes.linkStyles} to="/" >Se déconecter</Link>
                </Grid>
              </Grid>
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default Navbar;
