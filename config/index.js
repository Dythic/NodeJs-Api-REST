require('dotenv').config(); // Charge les variables d'environnement depuis un fichier .env

const { connectDb } = require('./db');

// Exportez d'autres configurations ici si nécessaire, par exemple pour JWT

module.exports = {
    connectDb,
    // Autres configurations exportées
};
