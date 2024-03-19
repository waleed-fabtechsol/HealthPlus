import { AppBar, Avatar, Button, Hidden, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useLocation } from 'react-router-dom';
import { IoPower } from "react-icons/io5";
import { PiNotificationBold } from 'react-icons/pi';


function Navbar({ handleDrawerToggle }) {
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation()






  return (
    <Box className="" >



      <AppBar className='' position="fixed" sx={{ boxShadow: "0" }}>
        <Toolbar className='' style={{ display: 'flex', justifyContent: 'space-between' }} >
          <Box className=' d-flex  align-items-center justify-content-between w-100 p-2 rounded-2 nav-style'>
            <Box className="  d-flex justify-content-start align-items-center" >

              <h5 className=' my-0 mx-3 fw-bold' style={{ color: "#003B93" }}>  Welcome Back</h5>
            </Box>
            <div className='d-flex align-items-center'>
            <PiNotificationBold className='fs-4 mx-2' style={{color:"#003B93"}}/>
            <IoPower  className='fs-4 mx-2 me-5' style={{color:"#003B93"}}/>
              <Avatar onClick={() => setModalShow(true)} alt="Remy Sharp" src={require("../assets/google.png")} />


              <Hidden
                mdUp
              >

                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon style={{ color: "black" }} />
                </IconButton>
              </Hidden>
            </div>




          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}

export default Navbar;
