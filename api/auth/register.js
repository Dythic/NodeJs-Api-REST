import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger.js';

const register = async (req, res) => {
    try {
        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Création du nouvel utilisateur
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // Génération du token JWT
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).send({ user: newUser, token });
    } catch (err) {
        logger.error('Erreur lors de l\'inscription:', err);
        res.status(500).send('Erreur lors de l\'inscription');
    }
};

export default register;