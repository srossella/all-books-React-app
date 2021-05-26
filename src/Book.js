import React from 'react';
import './App.css';

const Book=({book})=> {
    
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'left', margin:'15px'}}>
      {(book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail)? <img height='200px' src={book.volumeInfo.imageLinks.thumbnail}/>:<div></div>}

       <div style={{textAlign:'left', margin:'10px'}}>
          <h4> {book.volumeInfo.title} </h4>
          <p> {book.volumeInfo.authors} </p>
       </div>
    </div>
  )};

export default Book;
