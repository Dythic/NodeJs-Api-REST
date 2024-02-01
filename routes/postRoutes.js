const express = require('express');
const router = express.Router();
const auth = require('../utils/auth');
const createPost = require('../api/posts/createPost');
const getPost = require('../api/posts/getPost');
const updatePost = require('../api/posts/updatePost');
const deletePost = require('../api/posts/deletePost');

// Créer un post
router.post('/', auth, createPost);

// Obtenir un post spécifique
router.get('/:id', getPost);

// Mettre à jour un post
router.put('/:id', auth, updatePost);

// Supprimer un post
router.delete('/:id', auth, deletePost);

module.exports = router;
