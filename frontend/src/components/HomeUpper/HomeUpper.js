import React from 'react'
import "./HomeUpper.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomeUpper() {

  
  const auth = useSelector((state)=> state.user)
  return (
   <>
    <div className='upper-div'>
    </div>


    <Box>
    <Grid container justifyContent={'center'}>
        <Grid item xs={11} sm={8} md={8} lg={7} xl={6}   className='navbar'>
          <div className='list-item' style={{display:'flex'}}>
            <div className='list-item-children'>
            <Link to="/">HOME</Link>
            </div>
            <div  className='list-item-children'>
              {
                (auth.status === "Authenticated" && auth.user==='Admin')?( 
                  <Link to="/admin/hall">ADMIN</Link>
                ):(
                  <Link to="/admin_login">ADMIN</Link>
                )
              }
            </div>
            <div  className='list-item-children'>
            {
                (auth.status === "Authenticated" && auth.user === "Department")?(
                  <Link to="/department/booking">DEPARTMENT</Link>
                  ):(
                    <Link to="/department_login">DEPARTMENT</Link>
                    )
              }
            </div>
          </div>

        </Grid>
      </Grid>
      </Box>

    

   </>
  )
}
