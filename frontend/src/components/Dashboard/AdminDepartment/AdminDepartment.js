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






export default function AdminDepartment() {

    const [open, setOpen] = useState(true);
    const [list, setlist] = useState([]);



    const get_departments = async ()=> {
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
    
    <div className='admin-department-body'>
        <Appbar/>
        
                    <Grid container justifyContent={'space-around'}>
                
                    <Grid item xs={11} sm={5} md={4} lg={4} xl={3} >
                        <div className='admin-department-title-div'>
                        <h2 className='admin-department-title'>DEPARTMENTS</h2>
                        </div>
                    </Grid>

                    <Grid item xs={11} sm={5} md={4} lg={4} xl={3} justifyItems={'flex-end'}>
                    <Button size="medium" fullWidth className='btn-admin-department'>CREATE DEPARTMENT</Button>
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
