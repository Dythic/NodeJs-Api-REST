const User = require('../models/User');

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.send({ message: 'Utilisateur supprimé avec succès' });
    } catch (err) {
        res.status(500).send('Erreur lors de la suppression de l utilisateur');
    }
};

module.exports = deleteUser;
