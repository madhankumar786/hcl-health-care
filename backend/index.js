const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/user');
const appointmentRoutes = require('./routes/appointment');
const cors = require('cors');
dotenv.config({ path: './config/config.env' });

// Initialize Express
const app = express();
app.use(cors());

// Option 2: Restrict to a specific origin
app.use(cors({
    origin: 'http://localhost:3001', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Allow credentials (cookies, etc.)
}));
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection failed:', err.message));

// Auth routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
