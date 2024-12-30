import User from '../../models/User.js';

const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }

        await user.update(req.body);
        res.send(user);
    } catch (err) {
        res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur');
    }
};

export default updateUser;
