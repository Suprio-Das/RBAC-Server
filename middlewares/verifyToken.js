import jwt from 'jsonwebtoken';

const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;
        console.log(token);
    } catch (error) {
        console.log(error)
    }
}

export { isAdmin }