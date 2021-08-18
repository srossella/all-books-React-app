import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Inputbar from '../components/Inputbar/Inputbar';
import Grid from '@material-ui/core/Grid';
import BookContainer from '../components/BookContainer/BookContainer.js'

const Home = () => {
  return (
    <>
            <Inputbar/>

            <div style={{margin:'20px',marginBottom:'50px'}}>
                <Grid container spacing="3" display="flex"  flexWrap="wrap" >
                    <BookContainer books={books} loading={loading} searchName={searchName} /> 
                </Grid>
            </div>
    </>
  )
}

export default Home;
