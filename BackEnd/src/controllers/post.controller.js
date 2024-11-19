import Post from "../models/post.model.js"

export const getPosts = async (req, res) => {
    res.json(await Post.find({ user: req.user.id }));
}

export const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if ( !post ) return res.status(404).json({ message: "Post not found." });
    res.json(post);
}

export const createPost = async (req, res) => {
    const { title, description } = req.body;

    const post = Post({
        title: title,
        description: description,
        user: req.user.id,
        //date: date,
    });

    res.status(200).json(await post.save());
}

export const deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if ( !post ) return res.status(404).json({ message: "Post not found." });
    res.sendStatus(204);
}

export const updatePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id, req.body, { new: true });
    if ( !post ) return res.status(404).json({ message: "Post not found." });
    res.json(post);
}
