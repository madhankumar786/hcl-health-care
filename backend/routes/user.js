const express = require('express');
const { registerUser, loginUser, logoutUser, editUserProfile } = require('../controllers/user');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.put('/edit-profile/:userId', editUserProfile);

module.exports = router;
