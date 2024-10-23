const express = require('express');
const { createAppointment, getDoctorAppointments, getPatientAppointments, getUpcomingAppointments } = require('../controllers/appointment');
const { protect } = require('../middleware/userAuth');
const router = express.Router();

router.post('/createappointment', protect, createAppointment);

router.get('/doctor/:doctorId', getDoctorAppointments);

router.get('/patient/:patientId', getPatientAppointments);

router.get('/upcoming/:userId', getUpcomingAppointments);
module.exports = router;
