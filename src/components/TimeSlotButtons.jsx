import React from 'react';
import { Button, Grid } from '@mui/material';

const TimeSlotButtons = ({ timeSlot, handleTimeSlotClick, areTimeSlotsEnabled }) => {
    const slots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

    return (
        <Grid container spacing={2}>
            {slots.map((slot) => (
                <Grid item xs={4} key={slot}>
                    <Button
                        variant={timeSlot === slot ? "contained" : "outlined"}
                        color="primary"
                        fullWidth
                        onClick={() => handleTimeSlotClick(slot)}
                        sx={{ marginBottom: 2 }}
                        aria-label={`Select ${slot}`}
                        disabled={!areTimeSlotsEnabled}
                    >
                        {slot}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default TimeSlotButtons;
