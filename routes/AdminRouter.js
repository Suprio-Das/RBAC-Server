import express from 'express';
import { DeleteUser, GetUser } from '../controllers/Admin.js';
import { isAdmin } from '../middlewares/verifyToken.js';

const AdminRoutes = express.Router();

AdminRoutes.get('/getuser', isAdmin, GetUser)
AdminRoutes.post('/delete/:id', isAdmin, DeleteUser)

export default AdminRoutes;