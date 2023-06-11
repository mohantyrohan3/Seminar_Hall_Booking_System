import React from 'react'
import "./HomeUpper.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function HomeUpper() {
  return (
   <>
    <div className='upper-div'>
    </div>


    <Box>
    <Grid container justifyContent={'center'}>
        <Grid item xs={11} sm={8} md={8} lg={7} xl={6}   className='navbar'>
          <div className='list-item'>
            <div className='list-item-children'>
            <Link to="/">HOME</Link>
            </div>
            <div  className='list-item-children'>
            <Link to="/admin_login">ADMIN</Link>
            </div>
            <div  className='list-item-children'>
            <Link to="/department_login">DEPARTMENT</Link>
            </div>
          </div>

        </Grid>
      </Grid>
      </Box>

    

   </>
  )
}
