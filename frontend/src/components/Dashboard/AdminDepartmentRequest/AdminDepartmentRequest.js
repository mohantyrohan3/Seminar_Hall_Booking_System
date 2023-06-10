import React from 'react'
import "./AdminDepartmentRequest.css"
import Appbar from '../AppBar/AppBar'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import { Container } from '@mui/material';


const pages = [1,2,3,4,5,6];








export default function AdminDepartmentRequest() {


    const list = pages.map(()=>{
        return (
            <Grid item xs={10} sm={8} md={8} lg={8} xl={4} style={{marginBottom:'0.5rem'}}>

            <Card sx={{ width:'100%'}} className='department-request-admin-card'>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='department-admin-request-text'>
                        DEPARTMENT
                        </Typography>

                        <br/>

                        <Typography variant="body2" className='department-admin-request-text'>
                            <Person2Icon sx={{marginRight:'1rem'}} />
                            HEAD OF THE DEPARTMENT
                        </Typography>

                        <br/>
                        <Typography variant="body2" className='department-admin-request-text'>
                            <EmailIcon sx={{marginRight:'1rem'}} />
                            EMAIL
                        </Typography>


                    </CardContent>
                    <CardActions>
                        <Button className='btn-admin-booking-request-accept' size="medium">ACCEPT</Button>
                        <Button className='btn-admin-booking-request-reject' size="medium">REJECT</Button>
                    </CardActions>
                    </Card>




             </Grid>

        )
    })




  return (
   <>
        <div className='admin-department-request-div'>

            <Appbar/>



            <Grid container justifyContent={'center'}>
                
                <Grid item >
                    <div className='admin-department-request-title-div'>
                    <h2 className='admin-department-request-title'>DEPARTMENT REQUESTS</h2>
                    </div>
                </Grid>
                
                </Grid>



                <Container>
                <Grid container spacing={6} justifyContent={'center'} sx={{marginTop:'1rem'}}> 
                    {list}
                 </Grid>
                 </Container>  









        </div>
   
   </>
  )
}
