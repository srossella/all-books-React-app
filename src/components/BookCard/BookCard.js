import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultCover from './book.jpg';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

export default function BookCard({book}) {
let authors = Object.values(book.volumeInfo.authors || {0:"Authors not available"}); 

// display only the first 2 authors
if (authors.length>2) {
  authors = authors.slice(0, 2)
}
// display only the first 30 letters of each author
for (let i = 0; i < authors.length; i++) {
        if (authors[i].length > 30) {
          authors[i] = authors[i].substring(0,29) + "...";
        }
}
 
let title = book.volumeInfo.title || "Title not available";

// display only the first 60 letters of the title
if (title.length > 60) {
    title = title.substring(0, 59) + "...";
}

const cover = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) || defaultCover;

return (
  <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-between' }}>
    <CardContent style={{display:'flex', flexDirection:'row', marginBottom:'0px'}}>
        <img className="cover-img" src={cover} style={{ 
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
        <div style={{textAlign:'left', marginLeft:'10px',marginBottom:"0px" }}>
            <Typography variant="subtitle1" component="h2" paragraph="bool" >
              <Box fontWeight="fontWeightMedium" m={1} style={{marginTop:'0'}}>
                {title}
              </Box>
            </Typography>
            {
                  authors.map((author)=>{
                    return (
                      <Typography variant="subtitle2" component="h2" color="textSecondary">
                        <Box fontWeight="fontWeightRegular" m={1}>
                            {author}
                        </Box>
                      </Typography>
                    )
                  }) 
            }
        </div>
    </CardContent>
    <Link to={`/${book.id}`} style={{ textDecoration: 'none'}} >
      <Button variant="contained" size="small" color="primary" startIcon={<SearchIcon/>}>
        Learn More
      </Button>
    </Link>
  </div>
  );
}