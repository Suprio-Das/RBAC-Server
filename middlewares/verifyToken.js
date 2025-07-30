import jwt from 'jsonwebtoken';

const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;

        if (!token) {
            res.status(401).json({ message: "Unauthorized: No token found" })
        }

        const decoded_token = jwt.verify(token, process.env.JWT_Secret);
        console.log(decoded_token);

    } catch (error) {
        console.log(error)
    }
}

export { isAdmin }