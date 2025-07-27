import express from 'express';

const AuthRoutes = express.Router();

AuthRoutes.post('/register', (req, res) => {
    res.status(200).json({ success: true, message: 'Register is working' })
})

export default AuthRoutes;