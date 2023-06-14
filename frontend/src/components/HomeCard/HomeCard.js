import React from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import "./HomeCard.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function HomeCard() {


  const auth = useSelector((state)=> state.user);


  return (
    <>

        <Grid container spacing={2} justifyContent={'space-evenly'} className='grid-card-home'>
                <Grid item xs={11} sm={8} md={8} lg={7} xl={4}>
                <Card sx={{}} className='home-card'>
                <CardContent>
                        <Typography gutterBottom variant="h4" component="div" className='text-card-home'>
                        ADMIN
                        </Typography>
                        <Typography variant="body1" color="text.secondary" className='text-card-home'  style={{fontSize:"large"}}>
                        ADMIN HAS THE PRIVILEGE OF CREATING DEPARTMENT , CREATING HALLS , VIEW BOOKINGS ALSO APPROVE OR REJECT THE NOOKING REQUESTS. THEY ALSO CLEAR THE STATUS OF HALLS
                        </Typography>
                </CardContent>
                <CardActions className='btn-card-home'>
                <Button size="medium" className='btn-home-card-btn'>
                {
                (auth.status === "Authenticated" && auth.user==='Admin')?( 
                  <Link to="/admin/hall">LOGIN HERE</Link>
                ):(
                  <Link to="/admin_login">LOGIN HERE</Link>
                )
              }
                </Button>
                </CardActions>

                
                </Card>
                
                </Grid>


                <Grid item xs={11} sm={8} md={8} lg={7} xl={4}>
                <Card sx={{ }} className='home-card'>
                <CardContent>
                        <Typography gutterBottom variant="h4" component="div" className='text-card-home'>
                        DEPARTMENT
                        </Typography>
                        <Typography variant="body1" color="text.secondary" className='text-card-home' style={{fontSize:"large"}}>
                        HEAD OF THE DEPARTMENT ARE GIVEN UNIQUE EMIAL AND PASSWORD FOR LOGGING IN , OR EVEN THEY CAN REQUEST THEIR DEPARTMENT, THEY WILL GET PASSOWORD ON ACCEPTANCE IN THEIR EMAILS. THEY CAN BOOK HALLS
                        </Typography>
                </CardContent>
                <CardActions className='btn-card-home'>
                <Button size="medium" className='btn-home-card-btn'>
                {
                (auth.status === "Authenticated" && auth.user === "Department")?(
                  <Link to="/department/booking">LOGIN HERE</Link>
                  ):(
                    <Link to="/department_login">LOGIN HERE</Link>
                    )
              }
                </Button>
                </CardActions>
                </Card>
                    
                </Grid>
        
      </Grid>


    
    
    </>
  )
}
