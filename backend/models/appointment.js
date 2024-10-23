const mongoose = require('mongoose');

// Appointment schema
const appointmentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the patient
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the doctor
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    slotTime: {
        type: String, // Format can be 'HH:MM AM/PM'
        required: true,
    },
    reasonForVisit: {
        type: String,
        required: true,
    },
    additionalInfo: {
        type: String,
        default: '',
    },
}, {
    timestamps: true, // Automatically create createdAt and updatedAt fields
});

// Create Appointment model
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
