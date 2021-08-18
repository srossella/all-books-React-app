import React, {useState, useEffect} from 'react';

import Info from './pages/Info.js'
import Home from './pages/Home.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b6465f',
      main: '#890620',
      dark: '#440023',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ebd4cb',
      main: '#da9f93',
      dark: '#9b5568',
      contrastText: '#000',
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
          <div className="app"> 
            <Navbar/> 
            
                <Router>
                <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route exact path="/:id"> 
                    <Info books={books}/> 
                  </Route>
                </Switch>
              </Router> 
            <Footer/> 
        </div>  
    </ThemeProvider> 
  );
}

export default App;
