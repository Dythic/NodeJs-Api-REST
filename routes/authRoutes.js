const express = require('express');
const router = express.Router();
const register = require('../api/auth/register');
const login = require('../api/auth/login');

// Route d'inscription
router.post('/register', register);

// Route de connexion
router.post('/login', login);

module.exports = router;
