import React from 'react'
import './DepartmentLogin.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';


const handleSubmit = (e)=>{
    // e.preventDefault()
    console.log('Hello')
}

export default function DepartmentLogin() {
  return (
    <>
    <div className='department-login-body'>


    <Grid container spacing={2} style={{height:'100%'}} alignContent={'center'} justifyContent={'center'}>
        <Grid item xs={11} sm={8} md={7} lg={6} xl={5}>

            <Card sx={{}} className='department-card'>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" className='department-card-title'>
                    DEPARTMENT
                    </Typography>
                </CardContent>




                        <form onSubmit={handleSubmit}>
                {/* Input */}
                <Grid container spacing={4} justifyContent={'center'} alignContent={'center'}>


                        <Grid item  xs={11} sm={9} md={8} lg={9} xl={9} justifyItems={'center'}>

                                <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='email'
                                     placeholder="Email"
                                     required={true}
                                     className='department-input'
                                     startAdornment={
                                    <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                        <EmailIcon/>
                                    </InputAdornment>
                                }
                                 />
                            </FormControl>

                        </Grid>


                        <Grid item xs={11} sm={9} md={8} lg={9} xl={9}>

                        <FormControl  fullWidth error>
                             <Input
                                     type='password'
                                     placeholder="Password"
                                     required={true}
                                     disableUnderline={true}
                                     className='department-input'
                                     startAdornment={
                                    <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                       <HttpsIcon/>
                                    </InputAdornment>
                                }
                                 />
                    </FormControl>

                        </Grid>


                        <Grid item xs={8} sm={7} md={6} lg={6} xl={5}>
                         <Button size="medium" type='submit' className='btn-department-card' fullWidth>LOGIN HERE</Button>
                        </Grid>



                </Grid>
                
                        </form>
            



                <CardActions>

                </CardActions>
            </Card>




        </Grid>
      </Grid>




    </div>
    
    
    </>
  )
}
