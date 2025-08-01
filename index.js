import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DbCon from './utils/db.js';
import AuthRoutes from './routes/AuthRouter.js';
import AdminRoutes from './routes/AdminRouter.js';
import cookieParser from 'cookie-parser';
dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

DbCon();

app.use('/api/auth', AuthRoutes);
app.use('/api/admin', AdminRoutes);

app.use('/', (req, res) => {
    res.send('Server is running!');
})

app.listen(PORT);