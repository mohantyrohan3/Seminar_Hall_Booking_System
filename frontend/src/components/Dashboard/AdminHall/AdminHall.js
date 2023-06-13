import React, { useEffect, useState } from 'react'
import "./AdminHall.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HallCard from './HallCard';
import { Container } from '@mui/material';
import Appbar from '../AppBar/AppBar';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import {createHallApi} from "../../../api/createhallapi"





export default function AdminHall() {

  const [modal, setmodal] = useState(false);
  // const handleOpen = () => setmodal(true);
  const handleClose = () => setmodal(false);




  const [list, setlist] = useState([]);
  const [open, setOpen] = useState(true);

  const [name, setname] = useState("");
  const [capacity, setcapacity] = useState('');


  const createHall = ()=>{
    console.log('Hello')
    setmodal(true)
  }


  const get_halls = async ()=>{
    setOpen(true)
    try{
      const response = await axios.get('https://seminar.rohankm.online/api/hall/view_halls',{
        withCredentials:true
      })
      let temp = response.data.halls.map((data)=>{
        return(
          <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
              <HallCard data={data} gethall = {get_halls}/>
            </Grid>
        )
      })
      setlist(temp)
      setOpen(false)
    }

    catch(err){
      console.log(err)
    }

    setOpen(false)
  }









  const handleCreateHallSubmit = async(e)=>{
    e.preventDefault();
    
    const data = {
      name:name,
      capacity:capacity
    }
    try{
      setmodal(false)
      setOpen(true)
      const response = await createHallApi(data)
      setOpen(false);
    }
    catch(err){
      console.log(err)
    }
    get_halls();
    setname('');
    setcapacity('')
  }




  
 
  
  useEffect(() => {
    get_halls();
  }, []);



  return (
    <div className='admin-hall-body'>

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

                            <form onSubmit={handleCreateHallSubmit}>
                              
                            
                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='text'
                                     placeholder="Hall Name"
                                     required={true}
                                     value={name}
                                     className='admin-input'
                                     onChange={(e)=> setname(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>

                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='number'
                                     placeholder="Capacity"
                                     required={true}
                                     value={capacity}
                                     className='admin-input'
                                     onChange={(e)=> setcapacity(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>
                            <Button size="medium" fullWidth className='btn-admin-hall' type='submit'>CREATE HALL</Button>
                          
                            </form>
        </Box>
      </Modal>







        <Appbar/>
        
        <Grid container spacing={2} justifyContent={'flex-end'}>
        <Grid item xs={11} sm={5} md={4} lg={4} xl={3} justifyItems={'flex-end'}>
        <Button size="medium" fullWidth className='btn-admin-hall' onClick={createHall}>CREATE HALL</Button>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={1} xl={1} justifyItems={'flex-end'}>
        </Grid>
      </Grid>

      <Container sx={{marginTop:'0.5rem', marginBottom:'0.5rem'}}>
      <Grid container spacing={6} justifyContent={'center'}>
        {list}
      </Grid>
      </Container>






    </div>
  )
}
