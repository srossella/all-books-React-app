import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';
import logo from './logo.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar>
          
          
          <img height='30px' src={logo}/>
          <div className="socialIcons">
             <GitHubIcon/>
             <InstagramIcon/>
             <EmailOutlinedIcon/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}