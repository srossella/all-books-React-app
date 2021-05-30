import React, {useState, useEffect} from 'react';
import './App.css';
import BookContainer from './BookContainer.js'
import Info from './Info.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import NotFound from './NotFound';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from './AppBar'

import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';

const App=()=> {
  const [searchName,setSearchName]=useState('');
  const [books, setBooks]=useState([]);
  const [loading, setLoading]=useState(false);
  
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
    <div className="App">
      
      <AppBar/>
      <Router>
        <Switch>
          <Route exact path="/">
          <Input 
          
            placeholder="search book" 
            defaultValue="" 
            inputProps={{ 'aria-label': 'description' }} 
            onChange={(e)=>setSearchName(e.target.value)} 
          />
           {/* <TextField 
              id="outlined-search" 
              label="Search book or author" 
              type="search" 
              variant="outlined" 
              onChange={(e)=>setSearchName(e.target.value)} 
           /> */}

            <Box margin="auto" maxWidth="1000px"  display="flex" flexDirection="row" flexWrap="wrap">
               
            
              <BookContainer books={books} loading={loading} searchName={searchName}/> 
            </Box>

          </Route>
          <Route exact path="/:id"> 
            <Info books={books}/>
          </Route>
          <Route component={NotFound} />
               
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
