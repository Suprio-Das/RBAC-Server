import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DbCon from './utils/db.js';
import AuthRoutes from './routes/AuthRoutes.js';
dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());

DbCon();

app.use('/', (req, res) => {
    res.send('Server is running!');
})

app.use('/api/auth', AuthRoutes);

app.listen(PORT);