import React from 'react';
import './App.css';
import BookCard from './BookCard'
import {Link, useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    
    

  }
  
}));

const BookContainer= ({books, loading, searchName})=> {
  const classes = useStyles();
  
  if (loading){
    return <div> loading...</div> 
  }

  if (searchName && books.length===0){
    return <div> no books found...</div> 
  }

  if (searchName && books){
    return (
        <>
          {
            books.map((book)=>{
                return (
                 
                    <Grid  item xs={12}  sm={6}  >
                    
                      <Paper className={classes.paper}>
                        <BookCard book={book} key={book.id}/>
                      </Paper>
                
                    </Grid>
                  
                )
            })
          }
        </>
    );
  }

  return <div></div>
}

export default BookContainer;
