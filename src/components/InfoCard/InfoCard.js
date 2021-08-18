import React from 'react';
import {Link, useParams} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import defaultCover from './book.jpg';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  paper: {
      color: theme.palette.text.primary,
      background: theme.palette.secondary.light,
      padding: '20px',
      display:'flex',
      flexWrap:'wrap', 
      flexDirection:'column',
      margin:'auto',
      maxWidth:'800px',
      position:'relative',
      marginTop:'170px',
      bottom: '20px'
  },
}));

const InfoCard= ({books})=> {
  const classes = useStyles();
  const {id} = useParams();
  console.log(id, books)
  const book = books.find(book => book.id === id)
  
  if (book) {
    const cover = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) || defaultCover;
    let authors=Object.values(book.volumeInfo.authors || {0:"Authors not available"});
    return (
      <>
        <Box style={{margin:'20px', marginBottom:'30px'}} >
          <Grid  item xs={12}  sm={12} lg={12} >
            <Paper className={classes.paper} >
              <img height='300px' src={cover} style={{margin:'auto', marginTop:'10px', 
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              }}/>
              <div  style={{textAlign:'left', margin:'10px', marginTop:'20px'}}>
                <Typography variant="body2" component="p" style={{color:'#9b5568'}}>
                  Title
                </Typography>
                <Typography variant="h5" component="h2">
                  <Box fontWeight="fontWeightBold" m={1}>
                   {book.volumeInfo.title || "No title available"} 
                  </Box>
                </Typography>
                <Typography variant="body2" component="p" style={{color:'#9b5568'}} >
                    Authors
                </Typography>
                {
                    authors.map((author)=>{
                      return (
                        <>
                          <Typography variant="subtitle1" component="h2">
                            <Box fontWeight="fontWeightMedium" m={1}>
                              {author}
                            </Box>
                          </Typography>
                        </>
                      )
                    }) 
                }
                <Typography variant="body2" component="p" style={{color:'#9b5568'}}>
                  Date 
                </Typography>
                <Typography variant="h7" component="h3" gutterBottom >
                  <Box fontWeight="fontWeightMedium" m={1}>
                    {book.volumeInfo.publishedDate || "No date available"}
                  </Box>
                </Typography>
                <Typography variant="body2" component="p" style={{color:'#9b5568'}} >
                  Description
                </Typography>
                <Typography variant="body1" component="p" align="justify" gutterBottom >
                  <Box fontWeight="fontWeightRegular" m={1}>
                    {book.volumeInfo.description || "No description available"}
                  </Box>
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Box>
      
        <Link to="/" className='button' style={{ textDecoration: 'none',
              position:'fixed', top:'90px',  left: '50%', marginLeft: '-83.5px'}}>
          <Button variant="contained" color="primary" startIcon={<HomeIcon />} >
            Back to books
          </Button>
        </Link>
      </>
    );

  } else {

    return (
      <div style={{ margin:'auto',marginTop:'100px', justifyContent:'center'}}>
        <Typography variant="h4" component="p" align="center" style={{color:'#fff'}} >
          Page not found!
        </Typography>
        <Link to="/" className='button' style={{ textDecoration: 'none', 
              position:'fixed', top:'160px',  left: '50%', marginLeft: '-83.5px' }}>
          <Button variant="contained" color="primary" startIcon={<HomeIcon />}>
            Back to books
          </Button>
        </Link>
      </div>
    )
  }
}

export default InfoCard;
