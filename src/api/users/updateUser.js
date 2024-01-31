const User = require('../models/User');

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.send(user);
    } catch (err) {
        res.status(500).send('Erreur lors de la mise à jour de l utilisateur');
    }
};

module.exports = updateUser;
