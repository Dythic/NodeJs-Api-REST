import { Router } from 'express';
import register from '../api/auth/register.js';
import login from '../api/auth/login.js';

const router = Router();

// Route d'inscription
router.post('/register', register);

// Route de connexion
router.post('/login', login);

export default router;
