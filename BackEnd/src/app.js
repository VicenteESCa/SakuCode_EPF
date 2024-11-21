import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';
import tagRoutes from './routes/tag.routes.js';

import cors from "cors";

const app=express();

app.use(cors())

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
/**
 * 
 * el api/auth puede ser reemplazada por cualquiera
 * tipo de direccion, la idea es que exista un prefijo 
 * antes del authRoutes.
 * 
 */

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/tag", tagRoutes);

export default app;