import React,{useEffect, useState} from 'react'
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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import {createDepartmentApi} from "../../../api/createdepartmentapi"




export default function AdminDepartment() {

    const [open, setOpen] = useState(true);
    const [list, setlist] = useState([]);
    const [modal, setmodal] = useState(false);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState('');
    const [department, setdepartment] = useState("");
    const [head, sethead] = useState('');


    const createDepartment = ()=>{
        setmodal(true)
    }

      const handleClose = () =>{
       setmodal(false)
       setemail("");
       setpassword("");
       setdepartment("");
       sethead("")
      }




    const get_departments = async ()=> {
        setOpen(true)
        try{
            const response = await axios.get("https://seminar.rohankm.online/api/department/show_departments")
           const temp = response.data.departments.map((data)=> {
            return(
                <Grid item xs={11} sm={6} md={6} lg={6} xl={6}>
                        <Card sx={{}} className='admin-department-card'>
                        <CardActionArea>
                            <CardContent>

                            <Typography gutterBottom variant="h5" className='admin-department-text' component="div">
                                {data.department}
                            </Typography>
                            <br/>
                            <Typography variant="body2"className='admin-department-text'>
                                <Person2Icon sx={{marginRight:"1rem"}}/>
                               {data.head}
                            </Typography>
                            <br/>
                            
                            <Typography variant="body2"className='admin-department-text'>
                                <EmailIcon sx={{marginRight:"1rem"}}/>
                                    {data.email}
                            </Typography>                               

                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </Grid>
            )
           })
           setlist(temp)

        }

        catch(err){
            console.log(err);
        }
        setOpen(false)

    }



    const handleCreateDepartmentSubmit = async (e)=>{
        e.preventDefault()
        setmodal(false)
        setOpen(true)
        const data = {
            email:email,
            password:password,
            department:department,
            head:head
        }
        
        try{
            const response = await createDepartmentApi(data);
        }

        catch(err){
            console.log(err)
        }
        setemail("");
        setpassword("");
        setdepartment("");
        sethead("")
        setOpen(false)
        get_departments()
    }




    useEffect(() => {
        get_departments()
    }, []);










  return (
  <>    


        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>


        <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal'>
          <Typography className='modal-text' sx={{marginBottom:'1rem'}} variant="h6" component="h2">
            CREATE HALL
          </Typography>     

                            <form onSubmit={handleCreateDepartmentSubmit}>
                              
                            
                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='email'
                                     placeholder="Email"
                                     required={true}
                                     value={email}
                                     className='admin-input'
                                     onChange={(e)=> setemail(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>
                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='password'
                                     placeholder="Password"
                                     required={true}
                                     value={password}
                                     className='admin-input'
                                     onChange={(e)=> setpassword(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>
                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='text'
                                     placeholder="Department Name"
                                     required={true}
                                     value={department}
                                     className='admin-input'
                                     onChange={(e)=> setdepartment(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>
                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='text'
                                     placeholder="Head of the department"
                                     required={true}
                                     value={head}
                                     className='admin-input'
                                     onChange={(e)=> sethead(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>




                            <Button size="medium" fullWidth className='btn-admin-hall' type='submit'>CREATE HALL</Button>
                          
                            </form>
        </Box>
      </Modal>





    
    <div className='admin-department-body'>
        <Appbar/>
        
                    <Grid container justifyContent={'space-around'}>
                
                    <Grid item xs={11} sm={5} md={4} lg={4} xl={3} >
                        <div className='admin-department-title-div'>
                        <h2 className='admin-department-title'>DEPARTMENTS</h2>
                        </div>
                    </Grid>

                    <Grid item xs={11} sm={5} md={4} lg={4} xl={3} justifyItems={'flex-end'}>
                    <Button size="medium" fullWidth className='btn-admin-department' onClick={createDepartment}>CREATE DEPARTMENT</Button>
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
