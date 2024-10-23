import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';

const HealthCard = ({ title, description,id }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
        key={id}
      sx={{
        maxWidth: isMobile ? '100%' : 400,
        margin: 'auto',
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden',
        m:1,
        flex:1,
        flexBasis:'300px'
      }}
    >
      <CardContent>
       
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
          {title}
        </Typography>

       
        <Box
          sx={{
            maxHeight: expanded ? 'none' : 80, 
            overflow: expanded ? 'visible' : 'hidden',
            textOverflow: 'ellipsis',
            position: 'relative',
          }}
        >
          <Typography
            variant="body2"
            component="p"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: expanded ? 'none' : 3,  
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Read More Button */}
        <Button size="small" onClick={toggleReadMore} sx={{ mt: 2 }}>
          {expanded ? 'Show Less' : 'Read More'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default HealthCard;
