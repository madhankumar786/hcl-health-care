import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const HealthCard = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        mb: 2,
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            mb: 1.5,
            color: "text.primary",
          }}
        >
          {title}
        </Typography>

        <Collapse in={expanded} collapsedSize="80px">
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              overflow: expanded ? "visible" : "hidden",
              textOverflow: expanded ? "clip" : "ellipsis",
              display: expanded ? "block" : "-webkit-box",
              WebkitLineClamp: expanded ? "none" : 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {content}
          </Typography>
        </Collapse>
        <Button
          onClick={toggleExpanded}
          endIcon={
            expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            padding: "8px 16px",
            fontWeight: "bold",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.dark",
              color: "white",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
            },
            "&:active": {
              transform: "translateY(0)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          {expanded ? "Read Less" : "Read More"}
        </Button>
      </CardContent>
    </Card>
  );
};

const HealthInformation = () => {
  const healthInfo = [
    {
      title: "COVID-19 Updates",
      content: `Stay informed about the latest COVID-19 guidelines and vaccination information. 
                Our medical team regularly updates this section with the most recent protocols, 
                vaccination schedules, and preventive measures. We provide detailed information 
                about current variants, booster shots, and any changes in public health guidelines. 
                This helps ensure our community stays well-informed and protected.`,
    },
    {
      title: "Seasonal Flu Prevention",
      content: `Learn about steps you can take to prevent the seasonal flu and when to get vaccinated. 
                Our comprehensive guide includes information about proper hand hygiene, avoiding close 
                contact with sick individuals, maintaining a healthy lifestyle, and the importance of 
                annual flu vaccinations. We also provide updates on the current flu season's severity 
                and specific strains being monitored.`,
    },
    {
      title: "Mental Health Awareness",
      content: `Explore resources and support options for maintaining good mental health. 
                We offer information about various mental health conditions, coping strategies, 
                and professional support services. Our resources include stress management techniques, 
                mindfulness practices, and guidance on when to seek professional help. We believe in 
                promoting mental health awareness and reducing stigma through education and open dialogue.`,
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          color: "text.primary",
          fontWeight: "medium",
        }}
      >
        Latest Health Information
      </Typography>
      <Box>
        {healthInfo.map((info, index) => (
          <HealthCard key={index} title={info.title} content={info.content} />
        ))}
      </Box>
    </Container>
  );
};

export default HealthInformation;
