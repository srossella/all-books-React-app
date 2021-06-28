import React from 'react';
import './App.css';
import {Link, useParams} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const NotFound= ()=> {

  return (
      <div>
          Page not found nbjhjhb
          <Link to="/" className='button'>
            <Button variant="contained" color="primary">
              Back to books
            </Button>
          </Link>
     </div>
  );
}

export default NotFound;
