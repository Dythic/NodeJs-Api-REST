import Post from '../../models/Post.js';

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).send('Post non trouvé');
        }

        await post.update(req.body);
        res.send(post);
    } catch (err) {
        res.status(500).send('Erreur lors de la mise à jour du post');
    }
};

export default updatePost;
