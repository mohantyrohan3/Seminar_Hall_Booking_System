import React, { useEffect, useState } from 'react'
import "./AdminLogin.css"
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
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { adminloginApi } from '../../api/adminloginapi';

const handleSubmit = (e)=>{
    // e.preventDefault()
    console.log('Hello')
}


export default function AdminLogin() {
    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const handleEmail=(e)=>{
        setemail(e.target.value);
    }
    const handlePassword=(e)=>{
        setpassword(e.target.value);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            email:email,
            password:password
        }
       const response = await adminloginApi(data);
       console.log(response.data)
       if(!response.data.error){
           console.log(response.data.error)
           navigate("/admin/hall");
           axios.get('https://seminar.rohankm.online/api/details', {
               withCredentials: true
             })
             .then(function (response) {
               console.log(response)
             })
             .catch(function (error) {
               console.log(error);
             })
          }


        else{
           console.log(response.data)
           navigate("/");
        }
    }



  return (
   <>
        
    <div className='admin-login-body'>

    <Grid container spacing={2} style={{height:'100%'}} alignContent={'center'} justifyContent={'center'}>
        <Grid item xs={11} sm={8} md={7} lg={6} xl={5}>

                <Card sx={{}} className='admin-card'>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" className='admin-card-title'>
                    ADMIN
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
                                     value={email}
                                     className='admin-input'
                                     onChange={handleEmail}
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
                                     value={password}
                                     onChange={handlePassword}
                                     className='admin-input'
                                     startAdornment={
                                    <InputAdornment position="start" sx={{marginLeft:'0.5rem'}}>
                                       <HttpsIcon/>
                                    </InputAdornment>
                                }
                                 />
                    </FormControl>

                        </Grid>


                        <Grid item xs={8} sm={7} md={6} lg={6} xl={5}>
                         <Button size="medium" type='submit' className='btn-login-card' fullWidth>LOGIN HERE</Button>
                        </Grid>


                        <Grid item xs={8} sm={7} md={8} lg={8} xl={8}>
                         <Button  size="medium" fullWidth sx={{color:"white"}} className='home-text'>
                            <Link to='/'>
                                <HomeIcon sx={{marginRight:'0.8rem'}}/>
                                HOME</Link>
                         </Button>
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
