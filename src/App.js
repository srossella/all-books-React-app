import React from 'react';
import Info from './pages/Info.js'
import Home from './pages/Home.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import BookContextProvider from './contexts/BookContext.js';
import SearchNameContextProvider from './contexts/SearchNameContext.js';
import LoadingContextProvider from './contexts/LoadingContext.js';


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
          <BookContextProvider>
            <SearchNameContextProvider>
              <LoadingContextProvider>
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route exact path="/:id"> 
                      <Info /> 
                    </Route>
                  </Switch>
                </Router> 
                <Footer/> 
              </LoadingContextProvider>
            </SearchNameContextProvider>
          </BookContextProvider>
      </div>  
    </ThemeProvider> 
  );
}

export default App;
