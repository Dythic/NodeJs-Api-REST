const mongoose = require('mongoose');

const dbUri = process.env.MONGODB_URI || 'votre_uri_mongodb_locale';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Ajoutez d'autres options de Mongoose selon vos besoins
};

const connectDb = async () => {
    try {
        await mongoose.connect(dbUri, options);
        console.log('Connexion réussie à la base de données MongoDB');
    } catch (err) {
        console.error('Erreur de connexion à MongoDB:', err.message);
        process.exit(1); // Arrête l'application en cas d'erreur
    }
};

module.exports = { connectDb };
