import React,{useState} from 'react'
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
import {departmentRegisterApi} from "../../api/departmentregisterapi"
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function DepartmentRegister() {

    const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



    
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [head, setHead] = useState("");

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleDepartment = (e)=>{
        setDepartment(e.target.value)
    }
    const handleHead = (e)=>{
        setHead(e.target.value)
    }









    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = {
            email:email,
            department:department,
            head:head
        }
        const response = await departmentRegisterApi(data);
       console.log(response.data)
       if(!response.data.error){
            console.log(response.data)
           setEmail("")
           setDepartment("")
           setHead("")
           setOpen(true)
          }
        else{
           console.log(response.data)
        }
    }




  return (
    <>  

        <Snackbar vertical= 'top'
          horizontal= 'right' open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' , background:'#388e3c' ,color:'white'}}>
            Department Request Made
            </Alert>
        </Snackbar>
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
                                     value={email}
                                     onChange={handleEmail}
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
                                      value={department}
                                      onChange={handleDepartment}
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
                                    value={head}
                                    onChange={handleHead}
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
