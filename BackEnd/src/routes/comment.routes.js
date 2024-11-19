import express from "express"
import { getCommentsUser, getCommentsPost, getComment, createComment, deleteComment, updateComment, } from "../controllers/comment.controller.js"
import { authRequired } from "../middlewares/validateToken.js"

const router = express.Router();

router.get('/getCommentsUser/:idUser', authRequired, getCommentsUser);
router.get('/getCommentsPost/:idPost', authRequired, getCommentsPost);
router.get('/getComment/:id', authRequired, getComment);

router.post('/createComment', authRequired, createComment);
router.delete('/deleteComment/:id', authRequired, deleteComment);
router.put('/updateComment/:id', authRequired, updateComment);

export default router