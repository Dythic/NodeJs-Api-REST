import User from '../../models/User.js';

const getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.send(user);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
    }
};

export default getUser;
