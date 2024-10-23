import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/features/authSlice";
const Menu = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/">Bayer Healthcare</Link>
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
          <Button color="inherit" onClick={() => navigate('/health-information')}>Health Information</Button>
          {user && <Button color="inherit" onClick={() => navigate('/book-appointment')}>Book Appointment</Button>}
          {!user && <Button color="inherit" onClick={() => navigate('/login')}>Signin/Signup</Button>}
          {user && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
          {user && user.name}
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Menu;
