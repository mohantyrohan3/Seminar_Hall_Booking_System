import React from 'react'
import "./AdminHall.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HallCard from './HallCard';
import { Container } from '@mui/material';
import Appbar from '../AppBar/AppBar';



const pages = [1,2,3,4,5];


export default function AdminHall() {

  const list = pages.map(()=>{
    return(
      <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
          <HallCard/>
        </Grid>
    )
  })



  return (
    <div className='admin-hall-body'>

        <Appbar/>
        
        <Grid container spacing={2} justifyContent={'flex-end'}>
        <Grid item xs={11} sm={5} md={4} lg={4} xl={3} justifyItems={'flex-end'}>
        <Button size="medium" fullWidth className='btn-admin-hall'>CREATE HALL</Button>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={1} xl={1} justifyItems={'flex-end'}>
        </Grid>
      </Grid>

      <Container sx={{marginTop:'1rem', marginBottom:'1rem'}}>
      <Grid container spacing={10} justifyContent={'center'}>
        {list}
      </Grid>
      </Container>






    </div>
  )
}
