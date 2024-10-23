import React from 'react';
import { TextField } from '@mui/material';

const DatePicker = ({ date, setDate }) => (
    <TextField
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        label="Select Date"
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={{ marginBottom: 2 }}
        aria-label="Select Date"
    />
);

export default DatePicker;
