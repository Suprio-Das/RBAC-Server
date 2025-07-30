import express from 'express';
import { GetUser } from '../controllers/Admin.js';

const AdminRoutes = express.Router();

AdminRoutes.get('/getuser', GetUser)

export default AdminRoutes;