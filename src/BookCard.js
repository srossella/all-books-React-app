import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultCover from './book.jpg';
import './App.css';
import {Link, useParams} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
});

export default function BookCard({book}) {
  const classes = useStyles();
  
  let authors=Object.values(book.volumeInfo.authors || {0:"Authors not available"}); 

 
  // if ( Array.isArray(authors)){
  //   for (let i = 0; i < authors.length; i++) {
  //       if (authors[i].length > 20) {
  //         authors[i] = authors[i].substring(0,19) + "...";
  //       }
  //   }
  // }
  let title = book.volumeInfo.title || "Title not available";
  if (title.length > 50) {
    title = title.substring(0, 49) + "...";
  }
  const cover = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) || defaultCover;

  return (
    <>
      <CardContent style={{display:'flex', flexDirection:'row'}}>

        <img height='150px' src={cover}/>
        
        <div style={{textAlign:'left', margin:'10px', }}>
            <Typography variant="h6" component="h2" >
              {title}
            </Typography>
            {/* <Typography variant="h5" component="h2" >
              {authors}
            </Typography> */}
            {
                  authors.map((author)=>{
                    return (
                    <Typography variant="h5" component="h2" >
                      {author}
                    </Typography>
                    )
                  }) 
            }
        </div>
        
      </CardContent>
      <Link to={`/${book.id}`} style={{ textDecoration: 'none' }} >
               <Button size="small" color="primary" startIcon={<SearchIcon/>}>Learn More</Button>
      </Link>
    </>
  );
}