import express from 'express';
import { GetUser } from '../controllers/Admin.js';
import { isAdmin } from '../middlewares/verifyToken.js';

const AdminRoutes = express.Router();

AdminRoutes.get('/getuser', isAdmin, GetUser)

export default AdminRoutes;