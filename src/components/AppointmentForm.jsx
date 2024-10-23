// AppointmentForm.js
import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import DoctorSelect from './DoctorSelect';
import DatePicker from './DatePicker';
import TimeSlotButtons from './TimeSlotButtons';
import TextInput from './TextInput';

const AppointmentForm = () => {
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [reason, setReason] = useState('');
    const [notes, setNotes] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        const appointmentDetails = { doctor, date, timeSlot, reason, notes };
        console.log("Booking Details:", appointmentDetails);

        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/appointments/createappointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentDetails),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Appointment successfully created:', result);

        } catch (error) {
            console.error('Error creating appointment:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleTimeSlotClick = (slot) => {
        setTimeSlot(slot);
    };

    const areTimeSlotsEnabled = doctor && date;
    const isButtonDisabled = !timeSlot;

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', padding: 4, textAlign: 'center', fontWeight: 'bold' }}>
                Book an Appointment
            </Typography>
            <Box sx={{ margin: '10px 40px', padding: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ marginRight: '40px', width: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 4 }, padding: 1 }}>
                    <DoctorSelect doctor={doctor} setDoctor={setDoctor} />
                    <DatePicker date={date} setDate={setDate} />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '50%' }, marginBottom: { xs: 2, md: 4 }, padding: 1 }}>
                    <Typography variant="body1" gutterBottom>
                        Available Time Slots
                    </Typography>
                    <TimeSlotButtons
                        timeSlot={timeSlot}
                        handleTimeSlotClick={handleTimeSlotClick}
                        areTimeSlotsEnabled={areTimeSlotsEnabled}
                    />
                    <TextInput label="Reason for Visit" value={reason} onChange={(e) => setReason(e.target.value)} multiline />
                    <TextInput label="Additional Notes" value={notes} onChange={(e) => setNotes(e.target.value)} multiline />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        disabled={isButtonDisabled || loading}
                    >
                        {loading ? 'Booking...' : 'Confirm Booking'}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AppointmentForm;
