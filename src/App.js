import React, {useState, useEffect} from 'react';
import Scroll from './Scroll.js'
import BookContainer from './BookContainer.js'
import Info from './Info.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import NotFound from './NotFound';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar'
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import bookBackground from './book_background1.jpg';
import Box from '@material-ui/core/Box';
import { fade, makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple, green, white } from '@material-ui/core/colors';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a45477',
      main: '#73274b',
      dark: '#440023',
      contrastText: '#fff',
    },
    secondary: {
      light: '#DFCDD7',
      main: '#ce8396',
      dark: '#9b5568',
      contrastText: '#000',
    },
  },
});


const useStyles = makeStyles((theme) => {
 return {
  grow: {
    flexGrow: 1,
  }, 
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  searchIcon: {
    paddingLeft: 20,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: 50,
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'yellow',
    },
    margin: 'auto',
    width: '300px',
    marginTop: 40,
  },
}});



const App=()=> {
  const [searchName,setSearchName]=useState('');
  const [books, setBooks]=useState([]);
  const [loading, setLoading]=useState(false);
  const classes = useStyles();
  const { REACT_APP_APIKEY } = process.env;

  useEffect(()=>{
    
    if(searchName){
      setLoading(true);
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchName}&key=${REACT_APP_APIKEY}`)
      .then(response=>response.json())
      .then(users=>{console.log(users); setBooks(users.items.slice(0,10)); setLoading(false)})
      .catch(error=>{setBooks([]); setLoading(false); console.error(error)})
      
    }
  }, [searchName])

  
  return (
    <ThemeProvider theme={theme}>
       
    <div className="App" >
     
      <AppBar/>
      
      <Router>
        <Switch>
          <Route exact path="/">
         
            
            <div className="inputBar" >
                 <img className="imgBack" src={bookBackground}/>
                <input 
                  type="search"
                  placeholder="Search book" 
                  onChange={(e)=>setSearchName(e.target.value)} 
                />
            </div>
            <div  style={{margin:'20px'}}>
              <Box maxWidth="1500px"   >
                <Grid container spacing="3" display="flex" flexDirection="row" flexWrap="wrap" >
                    <BookContainer books={books} loading={loading} searchName={searchName} /> 
                </Grid>
              </Box>
              </div>

          </Route>
          <Route exact path="/:id"> 
            <Box marginTop="100px">
              <Info books={books}/>
            </Box>
          </Route>
          
               
          
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
