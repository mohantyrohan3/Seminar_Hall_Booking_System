import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import {cancelDepartmentApi} from "../../../api/canceldepartmentapi"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import {createDepartmentApi} from "../../../api/createdepartmentapi"





export default function AdminDepartmentRequestCard(props) {

    const [modal, setmodal] = useState(false);
    const [password, setpassword] = useState('');

    

    const acceptRequest = ()=>{
        setmodal(true)
    }

    const handleClose = () =>{
        setmodal(false)
        setpassword("");
    }





    const acceptDep = async(e)=> {
        e.preventDefault();
        const data = {
            email:props.data.email,
            password:password,
            department:props.data.department,
            head:props.data.head
        }

        try{
            const response = await createDepartmentApi(data)
        }
        catch(err){
            console.log(err)
        }
        handleClose()
        props.getdepartment();
    }






    const cancelDep = async()=>{
        const data = {
            email:props.data.email
        }
        try{
            const response = await cancelDepartmentApi(data)
            props.getdepartment();
        }
        catch(err){
            console.log(err)
        }
    }














  return (
   <>


<Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal'>
          <Typography className='modal-text' sx={{marginBottom:'1rem'}} variant="h6" component="h2">
            PROVIDE PASSWORD FOR DEPARTMENT
          </Typography>     

                            <form onSubmit={acceptDep}>
                              
                            
                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='text'
                                     placeholder="PROVIDE PASSWORD HERE"
                                     required={true}
                                     value={password}
                                     className='admin-input'
                                     onChange={(e)=> setpassword(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>
                            <Button size="medium" fullWidth className='btn-admin-hall' type='submit'>CREATE DEPARTMENT</Button>
                          
                            </form>
        </Box>
      </Modal>




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
                            <Button className='btn-admin-booking-request-accept' onClick={acceptRequest} size="medium">ACCEPT</Button>
                            <Button className='btn-admin-booking-request-reject' onClick={cancelDep} size="medium">REJECT</Button>
                        </CardActions>
                        </Card>




            </Grid>
   
   </>
  )
}
