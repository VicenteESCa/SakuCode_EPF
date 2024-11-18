import express from "express"
import { getPosts, getPost, createPost, deletePost, updatePost, } from "../controllers/post.controller.js"
import { authRequired } from "../middlewares/validateToken.js"

const router = express.Router();

router.get('/getPosts', authRequired, getPosts);
router.get('/getPost/:id', authRequired, getPost);

router.post('/createPost', authRequired, createPost);
router.delete('/deletePost/:id', authRequired, deletePost);
router.put('/updatePost/:id', authRequired, updatePost);

export default router