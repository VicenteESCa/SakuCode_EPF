import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import cors from "cors";

const app=express();

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
app.use("/api/auth", authRoutes)

export default app; 