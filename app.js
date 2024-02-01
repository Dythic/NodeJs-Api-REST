const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const { logger } = require('./utils/logger');
const db = require('./config/db');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

// Connexion à MongoDB
db.connectDb();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500).send('Une erreur s’est produite');
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
