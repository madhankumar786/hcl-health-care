import React from 'react';
import HealthCard from '../HealthCard/HealthCard';
import { Box, Typography } from '@mui/material';

const featuredTopic = [
    {
        id:1,
        title: 'Health Tips',
        description: `This is a health card description that contains more than three lines of text.
                    It will be truncated by default and shown in full when the "Read More" button
                    is clicked. Health is the greatest wealth, and maintaining it is essential.
                    This is where we talk about fitness, diet, mental health, and much more.`
    },
    {
        id:2,
        title: 'Health Checkups',
        description: `This is a health card description that contains more than three lines of text.
                    It will be truncated by default and shown in full when the "Read More" button
                    is clicked. Health is the greatest wealth, and maintaining it is essential.
                    This is where we talk about fitness, diet, mental health, and much more.`
    },
    {
        id:3,
        title: 'Organ Checkups',
        description: `This is a health card description that contains more than three lines of text.
                    It will be truncated by default and shown in full when the "Read More" button
                    is clicked. Health is the greatest wealth, and maintaining it is essential.
                    This is where we talk about fitness, diet, mental health, and much more.`
    },
    {
        id:4,
        title: 'Blood Tests',
        description: `This is a health card description that contains more than three lines of text.
                    It will be truncated by default and shown in full when the "Read More" button
                    is clicked. Health is the greatest wealth, and maintaining it is essential.
                    This is where we talk about fitness, diet, mental health, and much more.`
    },
    {
        id:5,
        title: 'General checkups',
        description: `This is a health card description that contains more than three lines of text.
                    It will be truncated by default and shown in full when the "Read More" button
                    is clicked. Health is the greatest wealth, and maintaining it is essential.
                    This is where we talk about fitness, diet, mental health, and much more.`
    },
    {
        id:6,
        title: '',
        description: `This is a health card description that contains more than three lines of text.
                    It will be truncated by default and shown in full when the "Read More" button
                    is clicked. Health is the greatest wealth, and maintaining it is essential.
                    This is where we talk about fitness, diet, mental health, and much more.`
    },
];

const FeaturedTopics = () => {
    return (
        <Box>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    m: 2,
                    color: "text.primary",
                    fontWeight: "medium",
                }}
            >
                Latest Health Information
            </Typography>
            <Box sx={{display:'flex',flexBasis:'row',flexWrap:'wrap'}}>
            {featuredTopic?.map(item => {
                return (
                    <HealthCard
                        title={item?.title}
                        description={item?.description}
                        key={item.id}
                    />
                )
            })}
            </Box>
        </Box>
    );
}

export default FeaturedTopics;