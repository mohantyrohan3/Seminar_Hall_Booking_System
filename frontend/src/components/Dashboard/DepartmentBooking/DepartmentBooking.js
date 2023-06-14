import React,{useState , useEffect} from 'react'
import "./DepartmentBooking.css"
import Grid from '@mui/material/Grid';
import HallCard from '../AdminHall/HallCard';
import { Container } from '@mui/material';
import DepartmentAppBar from '../DepartmentAppBar/DepartmentAppBar';
import DepartmentBookingCard from './DepartmentBookingCard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';



export default function DepartmentBooking() {

    const [list, setlist] = useState([]);
    const [open, setOpen] = useState(true);

    const get_halls = async ()=>{
        setOpen(true)
        try{
          const response = await axios.get('https://seminar.rohankm.online/api/hall/view_halls',{
            withCredentials:true
          })
          let temp = response.data.halls.map((data)=>{
            return(
                <Grid item xs={11} sm={7} md={5} lg={4} xl={4}>
                         <DepartmentBookingCard data={data} gethall={get_halls}/>
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

      useEffect(() => {
        get_halls();
      }, []);
    



  return (
    <>

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        >
        <CircularProgress color="inherit" />
        </Backdrop>



        <div className='department-booking-body'>

            <DepartmentAppBar/>

            <div className='department-booking-title'>
                HALLS
            </div>

            <Container sx={{marginTop:'1rem', marginBottom:'1rem'}}>
                <Grid container spacing={10} justifyContent={'center'}>
                    {list}
                </Grid>
            </Container>




        </div>


    
    
    </>
  )
}
