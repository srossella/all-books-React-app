import React from 'react';
import './App.css';
import {Link, useParams} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Info= ({books})=> {
  const {id}= useParams();
  console.log(id, books)
  const book= books.find(book => book.id === id)
  
  if(book){
  return (
      <div className="infobox">
          qualche info in più sul libro: 
          
          <h2>
            {book.volumeInfo.title || "No title available"} 
          </h2>
          <h2>
            {book.volumeInfo.authors || "No authors available"}
          </h2>
          <h2>
            {book.volumeInfo.publishedDate || "No date available"}
          </h2>
          <p>
            {book.volumeInfo.description || "No description available"}
          </p>
          <Link to="/" className='button'>
            <Button variant="contained" color="primary">
              Back to books
            </Button>
          </Link>
     </div>
  );
  }else{
    return (
      <>
        <h2>book not found!</h2>
        <Link to="/" className='button'>
          <Button variant="contained" color="primary">
            Back to books
          </Button>
        </Link>
      </>
    )
  }
}

export default Info;
