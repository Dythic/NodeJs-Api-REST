const express = require('express');
const router = express.Router();
const { register, login } = require('../api/auth');

// Route d'inscription
router.post('/register', register);

// Route de connexion
router.post('/login', login);

module.exports = router;
