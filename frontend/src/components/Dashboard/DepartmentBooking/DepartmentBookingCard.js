import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import Grid from '@mui/material/Grid';
import {createBookingRequestApi} from "../../../api/createbookingapi"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';




export default function DepartmentBookingCard(props) {

    const [open, setOpen] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const [modal, setmodal] = useState(false);
    const [event, setevent] = useState("");
    const handleClose = () => {
        setmodal(false)
        setevent('')
    };

    const bookhall = ()=>{
        setmodal(true)
    }

    const handlebookingrequestsubmit = async(e)=>{
        e.preventDefault();
        const data ={
            hall:props.data.name,
            event:event
        }

        try{
            const response = await createBookingRequestApi(data);
            setOpen(true)
        }
        catch(err){
            console.log(err)
        }

        handleClose();
        props.gethall();
    }






  return (
   <>

        <Snackbar vertical= 'top'
          horizontal= 'right' open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' , background:'#388e3c' ,color:'white'}}>
                Booking Request Made
            </Alert>
        </Snackbar>

        <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box className='modal'>
          <Typography className='modal-text' sx={{marginBottom:'1rem'}} variant="h6" component="h2">
            EVENT NAME
          </Typography>     

                            <form onSubmit={handlebookingrequestsubmit}>
                              
                            
                            <FormControl fullWidth> 
                                     <Input
                                     disableUnderline={true}
                                     type='text'
                                     placeholder="Event Name"
                                     required={true}
                                     value={event}
                                     className='admin-input'
                                     onChange={(e)=> setevent(e.target.value)}
                                    sx={{padding:'1rem'}}
                                 />
                            </FormControl>


                            <Button size="medium" fullWidth className='btn-admin-hall' type='submit'>BOOK HALL</Button>
                            </form>
        </Box>
      </Modal>

    






    <Card sx={{ }} className='hall-admin-card' >
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        title="seminar hall"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='hall-card-text'>
          {props.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='hall-card-text'>
          <EventSeatIcon fontSize="large"  />
          <span className='number-seat'>{props.data.capacity}</span>
        </Typography>
      </CardContent>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item xs={8} sm={5} md={4} lg={4} xl={4}>
        {(props.data.status === "Not Filled")?(
            <Button size="medium" onClick={bookhall} fullWidth className='btn-admin-hall'>BOOK</Button>
        ):(
            <Button size="medium" fullWidth className='btn-admin-hall' disabled>Fiiled</Button>
            )
        }
        </Grid>
      </Grid>
      </Card>
   
   
   </>
  )
}
