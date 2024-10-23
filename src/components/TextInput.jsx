// TextInput.js
import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ label, value, onChange, multiline, rows }) => (
    <TextField
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        multiline={multiline}
        rows={rows}
        sx={{ marginBottom: 2, '& .MuiInputBase-root': { height: '100px' } }}
        aria-label={label}
    />
);

export default TextInput;
