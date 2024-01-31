const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Création du nouvel utilisateur
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // Enregistrement de l'utilisateur dans la base de données
        await newUser.save();

        // Génération du token JWT
        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);

        res.status(201).send({ user: newUser, token });
    } catch (err) {
        res.status(500).send('Erreur lors de l inscription');
    }
};

module.exports = register;
