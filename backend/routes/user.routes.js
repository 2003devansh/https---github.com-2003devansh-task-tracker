const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register', registerUser); // ✅ Correct
router.post('/login', loginUser);       // ✅ Correct

module.exports = router;
