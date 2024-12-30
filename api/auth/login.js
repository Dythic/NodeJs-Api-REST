import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    try {
        // Vérification de l'utilisateur
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(400).send('Email ou mot de passe incorrect');
        }

        // Vérification du mot de passe
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send('Email ou mot de passe incorrect');
        }

        // Génération du token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.send({ user, token });
    } catch (err) {
        res.status(500).send('Erreur lors de la connexion');
    }
};

export default login;