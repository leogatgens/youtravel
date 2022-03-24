import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';


  function Header() {
  return ( 
    <Fragment>
     <AppBar position="static">
      <Toolbar>
        <Typography variant ="headline" color="inherit">
          Países del planeta tierra
        </Typography>       
      </Toolbar>
  </AppBar>
  </Fragment>
  );
}   
export {Header};
