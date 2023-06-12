import "./AppBar.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeStatus } from "../../../store/slices/userSlice";



export default function Appbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logout = async ()=> {
      try{
        const res = await axios.get('https://seminar.rohankm.online/api/logout',{
          withCredentials:true
        });
        dispatch(removeStatus());
        navigate('/admin_login')
      }
      catch{

      }
    }




    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (

        // remove it later
        // <div className="temp-back">
      <>

        <AppBar position="static" className="appbar">
            
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Link to="/admin/hall">
            <Typography
              className="text-appbar"
              variant="h4"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontStyle: 'normal',
                color:'white',
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              ADMIN
            </Typography>
            </Link>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color:'white'
                }}
              >
                <MenuIcon />
              </IconButton>


              <Menu
                // id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  color:'white'
                }}
              >
                  <MenuItem  onClick={handleCloseNavMenu}>
                    <Link to='/admin/booking'>
                    <Typography sx={{color:'black'}} className="dropdown-text" textAlign="center" >BOOKINGS</Typography>
                    </Link>
                  </MenuItem>

                  <MenuItem  onClick={handleCloseNavMenu}>
                    <Link to='/admin/department'>
                    <Typography sx={{color:'black'}} className="dropdown-text" textAlign="center" >DEPARTMENT</Typography>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/admin/department/request">
                    <Typography sx={{color:'black'}} className="dropdown-text" textAlign="center" >REQUESTS</Typography>
                    </Link>
                  </MenuItem>
                
              </Menu>
            </Box>


            
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              className="text-appbar"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to="/admin/hall">
              ADMIN
             </Link>
            </Typography>



            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link to='/admin/booking'>
            <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' , fontSize:'1.2rem', marginLeft:'2rem', fontWeight:'bold' }}
                  className="text-appbar"
                >
                  BOOKINGS
                </Button>
            </Link>



              <Link to='/admin/department'>
                <Button
                
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' , fontSize:'1.2rem', marginLeft:'2rem', fontWeight:'bold' }}
                  className="text-appbar"
                >
                  DEPARTMENT
                </Button>
               </Link>



               <Link to="/admin/department/request">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' , fontSize:'1.2rem', marginLeft:'2rem', fontWeight:'bold' }}
                  className="text-appbar"
                >
                  REQUESTS
                </Button>
                </Link>



            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}} >
                  <Avatar alt="" src="" sx={{
                    color:'black'
                  }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' , color:'white' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <MenuItem  onClick={handleCloseUserMenu} sx={{color:'black'}}>
                    <Link to="/">
                    <Typography textAlign="center" className="dropdown-text"  sx={{color:'black'}}>HOME</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem  onClick={handleCloseUserMenu} sx={{color:'black'}}>
                    <Typography textAlign="center" className="dropdown-text" onClick={logout}  sx={{color:'black'}}>LOGOUT</Typography>
                  </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      </>
      // </div>
    );
}
