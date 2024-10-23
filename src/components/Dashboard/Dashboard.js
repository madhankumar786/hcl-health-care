import React from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';
import './Dashboard.css';
import Home from '../Home/Home';

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom sx={{py:3}}>
        Bayer Healthcare
      </Typography>
      <AppBar position="static" sx={{background:'#dedada'}}>
        <Tabs value={value} onChange={handleChange} aria-label="menu tabs">
          <Tab label="Home" />
          <Tab label="Health Topics" />
          <Tab label="Resources" />
          <Tab label="About Us" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Explore various health topics.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Access valuable resources.
      </TabPanel>
      <TabPanel value={value} index={3}>
        Learn more about us.
      </TabPanel>
      <TabPanel value={value} index={4}>
        Get in touch with us.
      </TabPanel>
    </div>
  );
};

export default Dashboard;
