import { Post } from "../models/post.model.js";

// create a post
const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;

        if (!name || !description || !age ) {
            return res.status(400).json({
                message: `All fields are required,`
            })
        }

        const post = await Post.create({ name, description, age });

        res.status(201).json({
            message: 'Post created successfully', post
        })
    } catch (err) {
        res.status(500).json({
            message: `Internal server error, ${err.message}`
        })
    }
}

// read a post
const getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({
            message: `Internal Server error: ${err}`
        })
    }
}

export {
    createPost,
    getPost
}