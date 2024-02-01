const Post = require('../../models/Post');

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            return res.status(404).send('Post non trouvé');
        }
        res.send(post);
    } catch (err) {
        res.status(500).send('Erreur lors de la mise à jour du post');
    }
};

module.exports = updatePost;
