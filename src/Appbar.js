import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import './App.css';
import logo from './img/logo.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  socialIcons:{
    display: 'flex',
    justifyContent: 'space-between',
    width:'100px'
  },
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default function Appbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar className={classes.toolbar}>
          <img height='30px' src={logo}/>
          <div className={classes.socialIcons}>
            <IconButton aria-label="github" edge="end" color="inherit" target="_blank" rel="noopener" href="https://github.com/srossella/books">
                <GitHubIcon />
            </IconButton>
            <IconButton aria-label="instagram" edge="end" color="inherit" target="_blank" rel="noopener" href="https://www.instagram.com/coding_madly/">
              <InstagramIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
