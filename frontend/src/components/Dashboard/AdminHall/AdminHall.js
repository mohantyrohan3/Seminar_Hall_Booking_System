import React from 'react'
import "./AdminHall.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HallCard from './HallCard';
import { Container } from '@mui/material';


export default function AdminHall() {
  return (
    <div className='admin-hall-body'>
        
        <Grid container spacing={2} justifyContent={'flex-end'}>
        <Grid item xs={11} sm={5} md={4} lg={4} xl={3} justifyItems={'flex-end'}>
        <Button size="medium" fullWidth className='btn-admin-hall'>CREATE HALL</Button>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={1} xl={1} justifyItems={'flex-end'}>
        </Grid>
      </Grid>

      <Container>
      <Grid container spacing={10} justifyContent={'center'}>
        <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
          <HallCard/>
        </Grid>
        <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
          <HallCard/>
        </Grid>
        <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
          <HallCard/>
        </Grid>
        <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
          <HallCard/>
        </Grid>
        <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
          <HallCard/>
        </Grid>
        <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
          <HallCard/>
        </Grid>
      </Grid>
      </Container>






    </div>
  )
}
