const Post = require('../../models/Post');

const createPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.user._id  // Supposant que l'utilisateur est authentifié
        });

        await post.save();
        res.status(201).send(post);
    } catch (err) {
        res.status(500).send('Erreur lors de la création du post');
    }
};

module.exports = createPost;
