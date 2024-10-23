import React from 'react';
import { Select, MenuItem } from '@mui/material';

const DoctorSelect = ({ doctor, setDoctor }) => (
    <Select
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        displayEmpty
        fullWidth
        sx={{ marginBottom: 2 }}
        aria-label="Select Doctor"
    >
        <MenuItem value="" disabled>Select Doctor</MenuItem>
        <MenuItem value="Doctor A">Doctor A</MenuItem>
        <MenuItem value="Doctor B">Doctor B</MenuItem>
    </Select>
);

export default DoctorSelect;
