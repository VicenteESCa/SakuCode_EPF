import Tag from "../models/tag.model.js"

export const getTags = async (req, res) => {
    res.json(await Tag.find());
}

export const getTagName = async (req, res) => {
    const { name } = req.body;

    const tag = await Tag.find({ name: name });
    if ( !tag ) return res.status(404).json({ message: `Couldn't find a tag with the given name: ${name}.` });

    res.json(tag);
}

export const getTag = async (req, res) => {
    const tag = await Tag.findById(req.params.id);
    if ( !tag ) return res.status(404).json({ message: "Tag not found." });
    res.json(tag);
}

export const createTag = async (req, res) => {
    const { name, description } = req.body;

    const tag = Tag({
        name: name,
        description: description,
    });

    const tagSaved = await tag.save();
    res.json(tagSaved);
}

export const deleteTag = async (req, res) => {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if ( !tag ) return res.status(404).json({ message: "Tag not found." });
    res.sendStatus(204);
}

export const updateTag = async (req, res) => {
    const tag = await Tag.findByIdAndDelete(req.params.id, req.body, { new: true });
    if ( !tag ) return res.status(404).json({ message: "Tag not found." });
    res.json(tag);
}