import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultCover from './book.jpg';

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
});

export default function BookCard({book}) {
  const classes = useStyles();
  
const authors = book.volumeInfo.authors || "Authors not available";
const title = book.volumeInfo.title || "Title not available";
const cover = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) || defaultCover;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={{display:'flex', flexDirection:'row'}}>

        <img height='150px' src={cover}/>
        
        <div style={{textAlign:'left', margin:'10px', }}>
            <Typography variant="h6" component="h2" >
              {title}
            </Typography>
            <Typography variant="subtitle1" component="h2" color="textSecondary" gutterBottom>
              {authors}
            </Typography>
          
        </div>
        
      </CardContent>
            <CardActions>
               <Button size="small" color="primary">Learn More</Button>
            </CardActions>
    </Card>
  );
}