import UserModel from "../Models/User.js";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check user existence
        const existUser = await UserModel.findOne({ email: email });
        if (existUser) {
            return res.status(400).json({ success: false, message: "User already exist." })
        }

        const hashedPassword = bcrypt(password, 10);

        const newUser = new UserModel({
            name, email, password: hashedPassword
        })

    } catch (error) {
        res.send(error);
    }
}