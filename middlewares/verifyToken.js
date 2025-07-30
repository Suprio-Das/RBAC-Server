import jwt from 'jsonwebtoken';

const isAdmin = async (req, res, next) => {
    try {
        const token = req.cookie.token;
        console.log(token);
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" });
    }
}