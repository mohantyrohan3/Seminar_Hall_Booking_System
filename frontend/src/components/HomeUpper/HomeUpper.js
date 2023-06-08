import React from 'react'
import "./HomeUpper.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function HomeUpper() {
  return (
   <>
    <div className='upper-div'>
    </div>


    <Box>
    <Grid container justifyContent={'center'}>
        <Grid item xs={12} sm={8} md={8} lg={7} xl={6}   className='navbar'>
          <div className='list-item'>
            <div className='list-item-children'>
              HOME
            </div>
            <div  className='list-item-children'>
              ADMIN
            </div>

            <div  className='list-item-children'>
              DEPARTMENT
            </div>
          </div>

        </Grid>
      </Grid>
      </Box>

    

   </>
  )
}
