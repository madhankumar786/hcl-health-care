import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import HealthCareBg from '../../assets/healthCareBg.jpg';

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: isMobile ? '50vh' : '70vh',
        backgroundImage: `url(${HealthCareBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          padding: theme.spacing(3),
          borderRadius: 2,
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          component="h1"
          sx={{ fontWeight: 'bold', mb: 2 ,color:'#f0b54c'}}
        >
          Your Health, Our Priority
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h5'} component="p">
          Explore the latest health information and rescurces from Bayer Health.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
