import jwt from 'jsonwebtoken';

const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;

        if (!token) {
            res.status(401).json({ message: "Unauthorized: No token found" })
        }

    } catch (error) {
        console.log(error)
    }
}

export { isAdmin }