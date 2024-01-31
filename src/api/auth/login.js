const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        // Vérification de l'utilisateur
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send('Email ou mot de passe incorrect');
        }

        // Vérification du mot de passe
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send('Email ou mot de passe incorrect');
        }

        // Génération du token JWT
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        res.send({ user, token });
    } catch (err) {
        res.status(500).send('Erreur lors de la connexion');
    }
};

module.exports = login;
