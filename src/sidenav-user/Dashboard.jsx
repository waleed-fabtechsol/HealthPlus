import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// import AuthContext from '../../auth/auth-context';
// import Navbar from './Navbar';
// import SideNav from './SideNav';
import Navbar from './Navbar';
import SideNav from './SideNav';
import Header from './Header';
import { Footer } from './Footer';




const DashboardnavUser = ({type}) => {
 
return (
  <Box className="" sx={{
    backgroundColor: 'white',
    // padding: '20px 0px 0px 20px', 
    minHeight: '100vh', 
  }} >
  <Box className="pe-2" sx={{ display: "flex",backgroundColor:"white",height:"100vh" }}>
  <CssBaseline />
  <Header />
  <Box className='px-3 px-md-3 pt-5 pb-2 zoom scroll' style={{backgroundColor:"white",borderRadius:"20px",}}
    component="main"
    sx={{
      flexGrow: 1,
    
      width: { md: `calc(100% - ${240}px)`, overflow: "auto" },
    }}
  >
    <Toolbar />




      <Outlet context={{type}} />


      {/* <Footer/> */}
      </Box>
      </Box>
      </Box>
)
};

export default DashboardnavUser;
