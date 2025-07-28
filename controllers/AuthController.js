import UserModel from "../Models/User.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Check user existence
    const existUser = await UserModel.findOne({ email: email });
    if (existUser) {
        return res.status(400).json({ success: false, message: "User already exist." })
    }
    console.log("User is new");
}