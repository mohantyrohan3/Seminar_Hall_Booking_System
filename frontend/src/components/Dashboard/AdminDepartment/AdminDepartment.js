import React from 'react'
import Appbar from "../AppBar/AppBar"
import "./AdminDepartment.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AdminDepartment() {
  return (
  <>
    <div className='admin-department-body'>
        <Appbar/>
        
        <Grid container justifyContent={'space-around'}>
                
                    <Grid item xs={11} sm={5} md={4} lg={4} xl={3} >
                        <div className='admin-department-title-div'>
                        <h2 className='admin-department-title'>DEPARTMENTS</h2>
                        </div>
                    </Grid>

                    <Grid item xs={11} sm={5} md={4} lg={4} xl={3} justifyItems={'flex-end'}>
                    <Button size="medium" fullWidth className='btn-admin-department'>CREATE DEPARTMENT</Button>
                    </Grid>
                
                </Grid>




            <Container>
            <Grid container spacing={2}>
                    <Grid item xs={8}>
                        h
                    </Grid>
            </Grid>
            </Container>







    </div>
  </>
  )
}
