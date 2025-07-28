import express from 'express';
import { login, register } from '../controllers/AuthController.js';

const AuthRoutes = express.Router();

AuthRoutes.post('/register', register);
AuthRoutes.post('/login', login);

export default AuthRoutes;