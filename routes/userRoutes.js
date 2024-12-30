import { Router } from 'express';
import auth from '../utils/auth.js';
import getUser from '../api/users/getUser.js';
import updateUser from '../api/users/updateUser.js';
import deleteUser from '../api/users/deleteUser.js';

const router = Router();

// Obtenir les informations d'un utilisateur
router.get('/:id', auth, getUser);

// Mettre à jour un utilisateur
router.put('/:id', auth, updateUser);

// Supprimer un utilisateur
router.delete('/:id', auth, deleteUser);

export default router;
