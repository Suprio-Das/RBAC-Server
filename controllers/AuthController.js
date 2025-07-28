import UserModel from "../Models/User.js";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check user existence
        const existUser = await UserModel.findOne({ email });
        if (existUser) {
            return res.status(400).json({ success: false, message: "User already exist." })
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new UserModel({
            name, email, password: hashedPassword
        })

        await newUser.save();

        res.status(200).json(newUser);

    } catch (error) {
        res.status(501).json({ success: false, message: 'Internal Server Error' })
        console.log(error)
    }
}