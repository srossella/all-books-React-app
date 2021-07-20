import React, {useState, useEffect} from 'react';
import BookContainer from './BookContainer.js'
import Info from './Info.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Appbar from './Appbar'
import Footer from './Footer.js'
import Grid from '@material-ui/core/Grid';
import bookBackground from './img/book_background.jpg';
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
  const [searchName,setSearchName]=useState('');
  const [books, setBooks]=useState([]);
  const [loading, setLoading]=useState(false);
   const { REACT_APP_APIKEY } = process.env;
  const urlToFetch =  `https://www.googleapis.com/books/v1/volumes?q=${searchName}&key=${REACT_APP_APIKEY}`;

  useEffect(()=>{
    if(searchName){
      setLoading(true);
      fetch(urlToFetch)
      .then(response=>response.json())
      .then(users=>{console.log(users); setBooks(users.items.slice(0,10)); setLoading(false)})
      .catch(error=>{setBooks([]); setLoading(false); console.error(error)})
    }
  }, [searchName])

  return (
    <ThemeProvider theme={theme}>
        <div className="App" style={{minHeight:'100vh', overflow:'auto',
              background: 'linear-gradient(45deg, #b6465f 30%, #da9f93 90%)',
              zIndex:'-1'}}
        >
        <Appbar/>
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="inputBar" >
                  <img className="bookBackground" src={bookBackground}/>
                  <input 
                    type="search"
                    placeholder="Search book" 
                    onChange={(e)=>setSearchName(e.target.value)} 
                  />
              </div>
              <div style={{margin:'20px',marginBottom:'50px'}}>
                  <Grid container spacing="3" display="flex"  flexWrap="wrap" >
                      <BookContainer books={books} loading={loading} searchName={searchName} /> 
                  </Grid>
              </div>
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
