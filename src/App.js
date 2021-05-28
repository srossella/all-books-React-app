import React, {useState, useEffect} from 'react';
import './App.css';
import Container from './Container.js'
import Info from './Info.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Input from '@material-ui/core/Input';
import NotFound from './NotFound';


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
      <h1>All the books in one place! </h1>
    
      <Router>
        <Switch>
          <Route exact path="/">
          <Input placeholder="search book" defaultValue="" inputProps={{ 'aria-label': 'description' }} onChange={(e)=>setSearchName(e.target.value)} />
          {/* <input type="text" placeholder="search books" onChange={(e)=>setSearchName(e.target.value)}/>   */}


            <Container books={books} loading={loading} searchName={searchName}/> 
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
