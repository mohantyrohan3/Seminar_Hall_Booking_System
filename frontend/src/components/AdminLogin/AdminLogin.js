import React from 'react'
import "./AdminLogin.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

export default function AdminLogin() {
  return (
   <>
    <div className='admin-login-body'>

    <Grid container spacing={2} style={{height:'100%'}} alignContent={'center'} justifyContent={'center'}>
        <Grid item xs={5}>

            <Card sx={{}} className='admin-card'>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" className='admin-card-title'>
                    ADMIN
                    </Typography>
                </CardContent>




                {/* Input */}
                <Grid container spacing={2} justifyContent={'center'} alignContent={'center'}>

                        <Grid item xs={9} justifyItems={'center'}>
                                <FormControl fullWidth   variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        className='admin-input'
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                        'aria-label': 'weight',
                                        }}
                                    />
                            </FormControl>

                        </Grid>


                        <Grid item xs={9}>

                        <FormControl sx={{  }} variant="outlined" fullWidth>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                className='admin-input'
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                'aria-label': 'weight',
                                }}
                                style={{marginBottom:'5rem'}}
                            />
                    </FormControl>

                        </Grid>
                </Grid>


            



                <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>




        </Grid>
      </Grid>




    </div>


   </>
  )
}
