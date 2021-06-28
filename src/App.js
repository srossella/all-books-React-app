import React, {useState, useEffect} from 'react';

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

import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import { fade, makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css';
import { purple, green } from '@material-ui/core/colors';
import './App.css';

const useStyles = makeStyles((theme) => ({
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
    width: '70%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const theme = createMuiTheme(
  {
    palette:{
      primary:{
        main: purple[500]
      },
    },
  })
const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 2,
  500: 1
};


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
    <div className="App">
      
      <AppBar/>
      <Router>
        <Switch>
          <Route exact path="/">
          <div className={classes.searchIcon}>
              <SearchIcon />
          </div>
          <div className={classes.grow}>
            <div className={classes.search}>
              <Input 
                placeholder="Search book" 
                defaultValue="" 
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search book' }} 
                onChange={(e)=>setSearchName(e.target.value)} 
              />
            </div>
          </div>
          <Box maxWidth="1000px" margin="auto" >
         
            <Grid container spacing="2" display="flex" flexDirection="row" flexWrap="wrap">
           
                 <BookContainer books={books} loading={loading} searchName={searchName}/> 
              
            </Grid>
            
          </Box>

          </Route>
          <Route exact path="/:id"> 
            <Info books={books}/>
          </Route>
          
               
          
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
