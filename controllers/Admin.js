import UserModel from "../Models/User.js"

const GetUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
}

export { GetUser }