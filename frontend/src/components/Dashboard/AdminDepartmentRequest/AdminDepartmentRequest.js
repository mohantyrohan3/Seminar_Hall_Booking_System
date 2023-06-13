import React, { useEffect, useState } from 'react'
import "./AdminDepartmentRequest.css"
import Appbar from '../AppBar/AppBar'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import axios from 'axios';
import AdminDepartmentRequestCard from './AdminDepartmentRequestCard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';










export default function AdminDepartmentRequest() {


    const [list, setlist] = useState([]);
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
      };




    const get_department_requests = async()=> {
        setOpen(true);
        try{
            const response = await axios.get("https://seminar.rohankm.online/api/department/show_department_requests", {
                withCredentials:true
            });
            const temp = response.data.requests.map((data)=>{
                return (
                <AdminDepartmentRequestCard data={data} getdepartment={get_department_requests}/>
                )
            })
            setlist(temp)
        }

        catch(error) {
            console.log(error)
        }

        setOpen(false);
    }



    useEffect(() => {
        get_department_requests()
    }, []);



  return (
   <>   

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
        <div className='admin-department-request-div'>

            <Appbar/>



            <Grid container justifyContent={'center'}>
                
                <Grid item >
                    <div className='admin-department-request-title-div'>
                    <h2 className='admin-department-request-title'>DEPARTMENT REQUESTS</h2>
                    </div>
                </Grid>
                
                </Grid>



                <Container>
                <Grid container spacing={6} justifyContent={'center'} sx={{marginTop:'1rem'}}> 
                    {list}
                 </Grid>
                 </Container>  









        </div>
   
   </>
  )
}
