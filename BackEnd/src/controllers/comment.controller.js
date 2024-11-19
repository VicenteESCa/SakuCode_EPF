import Comment from "../models/comment.model.js"

export const getCommentsUser = async (req, res) => {
    let { userID } = req.params.userID;
    if ( !userID ) { userID = req.user.id; }

    res.json(await Comment.find({ user: userID }));
}

export const getCommentsPost = async (req, res) => {
    res.json(await Comment.find({ user: req.params.postID }));
}

export const getComment = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    if ( !comment ) return res.status(404).json({ message: "Comment not found." });
    res.json(comment);
}

export const createComment = async (req, res) => {
    const { toPost, title, contents } = req.body;

    const comment = Comment({
        toPost: toPost,
        title: title,
        contents: contents,
        fromUser: req.user.id,
        //date: date,
    });
    res.json(await comment.save());
}

export const deleteComment = async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if ( !comment ) return res.status(404).json({ message: "Comment not found." });
    res.sendStatus(204);
}

export const updateComment = async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id, req.body, { new: true });
    if ( !comment ) return res.status(404).json({ message: "Comment not found." });
    res.json(comment);
}