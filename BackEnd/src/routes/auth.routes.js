import express from "express"
import { register, login, logout, profile, test } from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js"

import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = express.Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);

router.get('/test', test);

export default router