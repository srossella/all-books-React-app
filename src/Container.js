import React from 'react';
import './App.css';
import Book from './Book'
import {Link, useParams} from 'react-router-dom'

const Container= ({books, loading, searchName})=> {

  
  if (loading){
    return <div> loading...</div> 
  }

  if (searchName && books.length===0){
    return <div> no books found...</div> 
  }

  if (searchName && books){
    return (
        <div style={{ overflow: 'scroll',  height: '400px', margin: "20px"}}>
          {
            books.map((book)=>{
                return (
                  <Link to={`/${book.id}`}>
                    <Book book={book} key={book.id}/>
                  </Link>
                )
            })
          }
        </div>
    );
  }

  return <div></div>
}

export default Container;
