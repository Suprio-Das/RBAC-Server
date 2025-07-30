import UserModel from "../Models/User.js"

const GetUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
}

const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserModel.findByIdAndDelete(userId);

        if (!user) {
            res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export { GetUser, DeleteUser }