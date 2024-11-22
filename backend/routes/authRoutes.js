const express = require('express');
const { register, login, refreshToken, verifyToken } = require('../controllers/authController');
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post("/refresh-token", authMiddleware, refreshToken);
router.post("/verify-token", authMiddleware, verifyToken);

module.exports = router;
