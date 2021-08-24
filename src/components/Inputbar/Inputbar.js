import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import bookBackground from './book_background.jpg';
import {BookContext} from '../../contexts/BookContext';
import {SearchNameContext} from '../../contexts/SearchNameContext';
import {LoadingContext} from '../../contexts/LoadingContext';
import './Inputbar.css';



const Inputbar = () => {

    const [books, setBooks] = useContext(BookContext);
    const [searchName, setSearchName] = useContext(SearchNameContext);
    const [loading, setLoading] = useContext(LoadingContext);


    
    const { REACT_APP_APIKEY } = process.env;
    const urlToFetch = `https://www.googleapis.com/books/v1/volumes?q=${searchName}&key=${REACT_APP_APIKEY}`;
   
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
    <div className="inputBar" >
        <img className="bookBackground" src={bookBackground}/>
        <input 
        type="search"
        placeholder="Search book" 
        onChange={(e)=>setSearchName(e.target.value)} 
        />
    </div>
  )
}

export default Inputbar;
