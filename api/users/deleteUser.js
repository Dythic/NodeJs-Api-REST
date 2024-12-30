import User from '../../models/User.js';

const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({ where: { id: req.params.id } });
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.send({ message: 'Utilisateur supprimé avec succès' });
    } catch (err) {
        res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
    }
};

export default deleteUser;
