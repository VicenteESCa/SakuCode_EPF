import express from "express"
import {login, register, logOut} from "../controllers/auth.controller.js"

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logOut', logOut)

export default router