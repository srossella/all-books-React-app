import React from 'react';
import './App.css';
import BookCard from './BookCard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    minHeight:'200px',
    height:'90%',
    background: theme.palette.secondary.light,
   alignItems: 'stretch'
  },
  text:{
    margin:'auto',
    alignItems: 'center',
    height:'100%',
    marginTop: '30px',
    color:  '#fff',
  },
}));

const BookContainer = ({books, loading, searchName}) => {
  const classes = useStyles();
  
  if (loading) {
    return (
    <Typography variant="h6" component="p" className={classes.text}>
      Loading...
    </Typography>
    )
  }

  if (searchName && books.length===0) {
    return (
      <Typography variant="h6" component="p" className={classes.text}>
        No books found
      </Typography>
    )
  }

  if (searchName && books) {
    return (
        <>
          {
            books.map((book)=>{
                return (
                    <Grid  item xs={12}  sm={6} lg={4}>
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

  return <></>
}

export default BookContainer;
