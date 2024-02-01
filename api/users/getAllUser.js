const User = require('../../models/User');

const getAllUser = async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.send(user);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération de l utilisateur');
    }
};

module.exports = getAllUser;
