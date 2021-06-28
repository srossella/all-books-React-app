import React from 'react';
import './App.css';
import {Link, useParams} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import defaultCover from './book.jpg';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// const classes = makeStyles({
//   root: {
    
//   },
//   title: {
   
//   },
 
// });


const Info= ({books})=> {
  const {id}= useParams();
  console.log(id, books)
  const book= books.find(book => book.id === id)

  if(book){
  const cover = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) || defaultCover;

  return (
    <>
    
      <Paper className="paperInfo" style={{display:'flex',  margin:'auto', marginTop:'40px', maxWidth:'800px'}}>
        <img height='300px' src={cover}/>
        <div  style={{textAlign:'left', margin:'10px',marginLeft:'20px', minWidth:'300px' }}>
                <Typography variant="h5" component="h2" >
                  {book.volumeInfo.title || "No title available"} 
                </Typography>
                <br/>
                <Typography variant="h6" component="h2" >
                  {book.volumeInfo.authors || "No authors available"}
                </Typography>
                <Typography variant="h7" component="h3" >
                  {book.volumeInfo.publishedDate || "No date available"}
                </Typography>
                <br/>
                <Typography variant="p" component="p" >
                  {book.volumeInfo.description || "No description available"}
                </Typography>
        </div>
          
     </Paper>
    
     <Link to="/" className='button' style={{ textDecoration: 'none' }}>
     <Button variant="contained" color="textPrimary" style={{ marginTop: '20px' }}>
       Back to books
     </Button>
   </Link>

   </>

  );
  }else{
    return (
      <>
        <h2>Page not found!</h2>
       
        <Link to="/" className='button' style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="textPrimary" >
              Back to books
            </Button>
          </Link>
        
      </>
    )
  }
}

export default Info;
