import Post from '../../models/Post.js';

const deletePost = async (req, res) => {
    try {
        const post = await Post.destroy({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).send('Post non trouvé');
        }
        res.send({ message: 'Post supprimé avec succès' });
    } catch (err) {
        res.status(500).send('Erreur lors de la suppression du post');
    }
};

export default deletePost;
