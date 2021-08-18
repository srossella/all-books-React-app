import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import bookBackground from './book_background.jpg';
import './Inputbar.css';



const Inputbar = () => {

    const [searchName,setSearchName] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    
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
