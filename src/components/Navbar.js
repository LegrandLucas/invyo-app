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
    <AppBar position="sticky">
      <Toolbar xs={12}>
        <Typography className={classes.typographyStyles}>
          <h1 xs={2} >Invyo App</h1>
            <Grid container className={classes.gridStyles} xs={10} spacing={2}>
              <Grid item>
                <Link  className={classes.linkStyles} to="/Data">Articles</Link>
              </Grid>
              <Grid item>
                <Link  className={classes.linkStyles} to="/Todo">Mes tâches</Link>
              </Grid>
              <Grid item>
                <Link  className={classes.linkStyles} to="/Login">Se connecter</Link>
              </Grid>
            </Grid>
        </Typography>
      </Toolbar>
      </AppBar>
  )
}

export default Navbar;
