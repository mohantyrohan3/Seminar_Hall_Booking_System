import React from 'react'
import "./DepartmentRegister.css"
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
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const handleSubmit = (e)=>{
    // e.preventDefault()
    console.log('Hello')
}

export default function DepartmentRegister() {
  return (
    <>
        <div className='department-register-body'>

        <Grid container spacing={2} style={{height:'100%'}} alignContent={'center'} justifyContent={'center'}>
        <Grid item xs={11} sm={8} md={7} lg={6} xl={5}>

            <Card sx={{}} className='department-register-card'>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" className='department-card-register-title'>
                    Register Your Department Here
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
                                     className='department-register-input'
                                     startAdornment={
                                    <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                        <EmailIcon/>
                                    </InputAdornment>
                                }
                                 />
                            </FormControl>

                        </Grid>


                       


                        <Grid item  xs={11} sm={9} md={8} lg={9} xl={9} justifyItems={'center'}>

                                <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='text'
                                     placeholder="Write your Department"
                                     required={true}
                                     className='department-register-input'
                                     startAdornment={
                                    <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                        <SchoolIcon/>
                                    </InputAdornment>
                                }
                                 />
                            </FormControl>

                        </Grid>


                        <Grid item xs={11} sm={9} md={8} lg={9} xl={9}>

                        <FormControl  fullWidth error>
                            <Input
                                    type='text'
                                    placeholder="Head of the Department"
                                    required={true}
                                    disableUnderline={true}
                                    className='department-register-input'
                                    startAdornment={
                                    <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                    <PersonIcon/>
                                    </InputAdornment>
                                }
                                />
                        </FormControl>

                        </Grid>


                        <Grid item xs={8} sm={7} md={6} lg={6} xl={5}>
                         <Button size="medium" type='submit' className='btn-department-register-card' fullWidth>REGISTER HERE</Button>
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
