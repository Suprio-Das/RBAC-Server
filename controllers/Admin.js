const GetUser = async (req, res, next) => {
    try {
        console.log('All users!')
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
}

export { GetUser }