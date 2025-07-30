import jwt from 'jsonwebtoken';
import UserModel from '../Models/User.js';

const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;

        if (!token) {
            res.status(401).json({ message: "Unauthorized: No token found" })
        }

        const decoded_token = jwt.verify(token, process.env.JWT_Secret);

        const user = await UserModel.findById(decoded_token.userId);

        console.log(user);

    } catch (error) {
        console.log(error)
    }
}

export { isAdmin }