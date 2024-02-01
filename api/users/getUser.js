const User = require('../../models/User');

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.send(user);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération de l utilisateur');
    }
};

module.exports = getUser;
