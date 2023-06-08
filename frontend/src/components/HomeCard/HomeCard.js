import React from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import "./HomeCard.css"


export default function HomeCard() {
  return (
    <>

        <Grid container spacing={2} justifyContent={'space-evenly'} className='grid-card-home'>
                <Grid item xs={4}>
                <Card sx={{}} className='home-card'>
                <CardContent>
                        <Typography gutterBottom variant="h4" component="div" className='text-card-home'>
                        ADMIN
                        </Typography>
                        <Typography variant="body1" color="text.secondary" className='text-card-home'  style={{fontSize:"large"}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit quia pariatur architecto ad perferendis itaque beatae ut, quasi, delectus in molestias a nulla mollitia accusantium similique, eum nostrum rerum!
                        </Typography>
                </CardContent>
                <CardActions className='btn-card-home'>
                <Button size="medium" className='btn-home-card-btn'>LOGIN HERE</Button>
                </CardActions>

                
                </Card>
                
                </Grid>


                <Grid item xs={4}>
                <Card sx={{ }} className='home-card'>
                <CardContent>
                        <Typography gutterBottom variant="h4" component="div" className='text-card-home'>
                        DEPARTMENT
                        </Typography>
                        <Typography variant="body1" color="text.secondary" className='text-card-home' style={{fontSize:"large"}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum inventore doloremque earum excepturi, modi commodi magnam blanditiis. Adipisci, vitae provident! Atque magni assumenda aperiam illum sapiente eligendi amet ea harum.
                        </Typography>
                </CardContent>
                <CardActions className='btn-card-home'>
                <Button size="medium" className='btn-home-card-btn'>LOGIN HERE</Button>
                </CardActions>
                </Card>
                    
                </Grid>
        
      </Grid>


    
    
    </>
  )
}
