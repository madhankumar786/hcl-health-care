import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bayer Healthcare
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')} sx={{textTransform:'capitalize'}}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/about')} sx={{textTransform:'capitalize'}}>About</Button>
          <Button color="inherit" onClick={() => navigate('/contact')} sx={{textTransform:'capitalize'}}>Contact</Button>
          <Button color="inherit" onClick={() => navigate('/health-information')} sx={{textTransform:'capitalize'}}>Health Information</Button>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Menu;
