import { Router } from 'express';
import auth from '../utils/auth.js';
import createPost from '../api/posts/createPost.js';
import getPost from '../api/posts/getPost.js';
import updatePost from '../api/posts/updatePost.js';
import deletePost from '../api/posts/deletePost.js';

const router = Router();

// Créer un post
router.post('/', auth, createPost);

// Obtenir un post spécifique
router.get('/:id', getPost);

// Mettre à jour un post
router.put('/:id', auth, updatePost);

// Supprimer un post
router.delete('/:id', auth, deletePost);

export default router;
