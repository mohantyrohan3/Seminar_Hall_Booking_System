import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';








export default function AdminDepartmentRequestCard(props) {
  return (
   <>
    <Grid item xs={10} sm={8} md={8} lg={8} xl={4} style={{marginBottom:'0.5rem'}}>

                <Card sx={{ width:'100%'}} className='department-request-admin-card'>
                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='department-admin-request-text'>
                            {props.data.department}
                            </Typography>

                            <br/>

                            <Typography variant="body2" className='department-admin-request-text'>
                                <Person2Icon sx={{marginRight:'1rem'}} />
                               {props.data.head}
                            </Typography>

                            <br/>
                            <Typography variant="body2" className='department-admin-request-text'>
                                <EmailIcon sx={{marginRight:'1rem'}} />
                                {props.data.email}
                            </Typography>


                        </CardContent>
                        <CardActions>
                            <Button className='btn-admin-booking-request-accept' size="medium">ACCEPT</Button>
                            <Button className='btn-admin-booking-request-reject' size="medium">REJECT</Button>
                        </CardActions>
                        </Card>




            </Grid>
   
   </>
  )
}
