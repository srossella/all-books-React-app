import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Inputbar from '../components/Inputbar/Inputbar';
import Grid from '@material-ui/core/Grid';
import BookContainer from '../components/BookContainer/BookContainer.js'
// import BookContextProvider from './contexts/BookContext.js';
// import SearchNameContextProvider from './contexts/SearchNameContext.js';
// import LoadingContextProvider from './contexts/LoadingContext.js';

const Home = () => {


  return (
    <>
            <Inputbar/>

            <div style={{margin:'20px',marginBottom:'50px'}}>
                <Grid container spacing="3" display="flex"  flexWrap="wrap" >
                    <BookContainer/> 
                </Grid>
            </div> 
    </>
  )
}

export default Home;
