import UserModel from "../Models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const isValidPassword = bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            res.status(401).json({
                success: false,
                message: "User password not matched"
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_Secret)

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 360000
        })

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
            token
        })
    } catch (error) {
        res.status(501).json({ success: false, message: 'Internal Server Error' })
        console.log(error)
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookies('token');
        res.status(200).json({ success: true, message: "User logout successfully" })
    } catch (error) {
        res.status(501).json({ success: false, message: 'Internal Server Error' })
        console.log(error)
    }
}