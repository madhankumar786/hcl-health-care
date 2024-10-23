const express = require('express');
const { registerUser, loginUser, logoutUser, editUserProfile, myProfile } = require('../controllers/user');
const { protect } = require("../middleware/userAuth")
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.put('/edit-profile/:userId', protect, editUserProfile);
router.get("/user", protect, myProfile);

module.exports = router;
