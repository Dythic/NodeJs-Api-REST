import Post from '../../models/Post.js';

const createPost = async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            authorId: req.user.id  // Supposant que l'utilisateur est authentifié
        });

        res.status(201).send(post);
    } catch (err) {
        res.status(500).send('Erreur lors de la création du post');
    }
};

export default createPost;
