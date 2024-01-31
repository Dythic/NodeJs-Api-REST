const express = require('express');
const router = express.Router();
const auth = require('../utils/auth');
const { createPost, getPost, updatePost, deletePost } = require('../api/posts');

// Créer un post
router.post('/', auth, createPost);

// Obtenir un post spécifique
router.get('/:id', getPost);

// Mettre à jour un post
router.put('/:id', auth, updatePost);

// Supprimer un post
router.delete('/:id', auth, deletePost);

module.exports = router;
