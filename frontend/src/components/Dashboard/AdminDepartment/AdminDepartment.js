import React from 'react'
import Appbar from "../AppBar/AppBar"
import "./AdminDepartment.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';


const pages = [1,2,3,4];




export default function AdminDepartment() {

    const list = pages.map(()=>{
        return(
            <Grid item xs={11} sm={6} md={6} lg={6} xl={6}>
            <Card sx={{}} className='admin-department-card'>
            <CardActionArea>
                <CardContent>

                <Typography gutterBottom variant="h5" className='admin-department-text' component="div">
                    DEPARTMENT NAME
                </Typography>
                <br/>
                <Typography variant="body2"className='admin-department-text'>
                    <Person2Icon sx={{marginRight:"1rem"}}/>
                    HEAD OF THE DEPARTMENT
                </Typography>
                <br/>
                
                <Typography variant="body2"className='admin-department-text'>
                    <EmailIcon sx={{marginRight:"1rem"}}/>
                        EMAIL
                </Typography>                               

                </CardContent>
            </CardActionArea>
            </Card>
            </Grid>
        )
    })






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
                    <Grid container spacing={2} justifyContent={'center'}>
                        {list}
                    </Grid>
            </Container>

    </div>
  </>
  )
}
