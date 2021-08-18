import React from 'react';
import {Link, useParams} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import defaultCover from '../img/book.jpg';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InfoCard from '../components/InfoCard/InfoCard';


const Info= ({books})=> {
 return <InfoCard books={books}/>
}

export default Info;
