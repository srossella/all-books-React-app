import React from 'react';
import './App.css';
import {Link, useParams} from 'react-router-dom'

const Info= ({books})=> {
  const {id}= useParams();
  console.log(id, books)
  const book= books.find(book => book.id === id)
  
  return (
      <div style={{width: '70vw'}}>
          qualche info in più sul libro: 
          
          <h2>
           {book.volumeInfo.title} 
          </h2>
          <h2>
           {book.volumeInfo.authors}
          </h2>
          <h2>
           {book.volumeInfo.publishedDate}
          </h2>
          <p>
           {book.volumeInfo.description}
          </p>
          <Link to="/" className='button'>
            Back to books
          </Link>
     </div>
  );
}

export default Info;
