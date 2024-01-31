const express = require('express');
const router = express.Router();
const auth = require('../utils/auth');
const { getUser, updateUser, deleteUser } = require('../api/users');

// Obtenir les informations d'un utilisateur
router.get('/:id', auth, getUser);

// Mettre à jour un utilisateur
router.put('/:id', auth, updateUser);

// Supprimer un utilisateur
router.delete('/:id', auth, deleteUser);

module.exports = router;
