const Appointment = require('../models/appointment');
const moment = require('moment');
// @desc    Create a new appointment
// @route   POST /api/appointments
const createAppointment = async (req, res) => {
    const { patient, doctor, date, slotTime, reasonForVisit, additionalInfo } = req.body;

    // Create new appointment
    const appointment = new Appointment({
        patient,
        doctor,
        date,
        slotTime,
        reasonForVisit,
        additionalInfo,
    });

    try {
        const savedAppointment = await appointment.save();
        res.status(201).json({ message: "appointment created successfully", savedAppointment });
    } catch (error) {
        res.status(400).json({ message: 'Error creating appointment', error });
    }
};

const getDoctorAppointments = async (req, res) => {
    const { doctorId } = req.params;

    try {
        const appointments = await Appointment.find({ doctor: doctorId })
            .populate('patient', 'name email') // Populate patient details
            .exec();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
};

const getPatientAppointments = async (req, res) => {
    const { patientId } = req.params;

    try {
        const appointments = await Appointment.find({ patient: patientId })
            .populate('doctor', 'name email') // Populate doctor details
            .exec();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
};

const getUpcomingAppointments = async (req, res) => {
    const { userId } = req.params;
    const { type } = req.query; // Expecting type as a query parameter (doctor or patient)
    console.log("getting up", type)
    try {
        console.log("getting up", type)
        const now = moment(); // Get current date and time

        let appointments;
        if (type === 'doctor') {
            console.log("i am doctor")
            appointments = await Appointment.find({
                doctor: userId,
                date: { $gte: now.toDate() }, // Filter for upcoming appointments
            })
                .populate('patient', 'name email') // Populate patient details
                .exec();
        } else if (type === 'patient') {
            appointments = await Appointment.find({
                patient: userId,
                date: { $gte: now.toDate() }, // Filter for upcoming appointments
            })
                .populate('doctor', 'name email') // Populate doctor details
                .exec();
        } else {
            return res.status(400).json({ message: 'Invalid user type. Use "doctor" or "patient".' });
        }
        if (appointments.length === 0) {
            return res.status(200).json({ message: 'No upcoming appointments found.', appointments: [] });
        }
        res.status(200).json({ appointments: appointments });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
};

module.exports = {
    createAppointment,
    getDoctorAppointments,
    getPatientAppointments,
    getUpcomingAppointments,
};