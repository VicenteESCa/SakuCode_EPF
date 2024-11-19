import express from "express"
<<<<<<< HEAD
import {login, register, logOut} from "../controllers/auth.controller.js"
=======
import {register, login, logout, profile} from "../controllers/auth.controller.js"
import {authRequired} from "../middlewares/validateToken.js"
>>>>>>> 04e32e990a6dc67a03fdc6150ff839601f15443a

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
<<<<<<< HEAD
router.post('/logOut', logOut)
=======
router.post('/logout', logout);

router.get('/profile', authRequired, profile);
>>>>>>> 04e32e990a6dc67a03fdc6150ff839601f15443a

export default router