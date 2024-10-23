const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// @desc    Register new user
// @route   POST /api/auth/register
const registerUser = async (req, res) => {
    console.log("secret", process.env.JWT_SECRET)
    console.log("secret", req.body)
    const { name, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({ name, email, password });

    // Return JWT token
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'Invalid email or password' });
    }
};
const logoutUser = (req, res) => {
    // On the client side, remove the token from local storage or cookies
    res.clearCookie('token'); // Assuming you store the token in cookies
    return res.status(200).json({ message: 'Logged out successfully.' });
};

const editUserProfile = async (req, res) => {
    const { userId } = req.params;
    const { name, healthInfo } = req.body; // Assuming these are the fields being updated

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, healthInfo },
            { new: true, runValidators: true } // Return the updated user and run validation
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Error updating profile', error });
    }
};

module.exports = { registerUser, loginUser, logoutUser, editUserProfile };
