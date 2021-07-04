import React from 'react';
import './App.css';
import {Link, useParams} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import defaultCover from './img/book.jpg';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
      const useStyles = makeStyles((theme) => ({
        paper: {
          color: theme.palette.text.primary,
          background: theme.palette.secondary.light,
          padding: '20px',
         display:'flex',
         flexWrap:'wrap', 
         flexDirection:'row'
        
        },
      }));


const Info= ({books})=> {
  const classes = useStyles();
  
  const {id}= useParams();
  console.log(id, books)
  const book= books.find(book => book.id === id)

  if(book){
  const cover = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) || defaultCover;
  let authors=Object.values(book.volumeInfo.authors || {0:"Authors not available"});
  return (
    <>
      
<div style={{margin:'20px', marginTop:'40px'}}>
      <Paper className={classes.paper} style={{display:'flex',  margin:'auto',maxWidth:'800px'}}>
        <img height='300px' src={cover}/>
        <div  style={{textAlign:'left', margin:'10px'}}>
                <Typography variant="h5" component="h2" >
                  {book.volumeInfo.title || "No title available"} 
                </Typography>
                <br/>

                {
                  authors.map((author)=>{
                    return (
                    <Typography variant="subtitle1" component="h2" >
                      {author}
                    </Typography>
                    )
                  }) 
                }
                
                <Typography variant="h7" component="h3" >
                  {book.volumeInfo.publishedDate || "No date available"}
                </Typography>
                <br/>
                <Typography variant="p" component="p" >
                  {book.volumeInfo.description || "No description available"}
                </Typography>
        </div>
          
     </Paper>
     </div>
     <Link to="/" className='button' style={{ textDecoration: 'none'}}>
        <Button variant="contained" color="primary" startIcon={<HomeIcon />} style={{ marginTop: '20px', 
        position:'fixed', bottom:'50px', display:'flex'
       }}>
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
