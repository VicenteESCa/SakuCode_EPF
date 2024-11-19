import express from "express"
import { getTags, getTag, getTagName, createTag, deleteTag, updateTag, } from "../controllers/tag.controller.js"
import { authRequired } from "../middlewares/validateToken.js"

const router = express.Router();

router.get('/getTags', authRequired, getTags);
router.get('/getTag/:id', authRequired, getTag);
router.get('/getTagName', authRequired, getTagName);

router.post('/createTag', authRequired, createTag);
router.delete('/deleteTag/:id', authRequired, deleteTag);
router.put('/updateTag/:id', authRequired, updateTag);

export default router