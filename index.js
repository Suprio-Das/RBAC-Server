const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { default: mongoose } = require('mongoose');
const UserModel = require('./Models/User');
dotenv.config()
const app = express();
const PORT = process.env.PORT || 4000;


// Middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send("RBAC server is running!!!");
})

// MongoDB Connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.63zdo.mongodb.net/RBACTest?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("MongoDB Connected.")
    })
    .catch(error => {
        console.log(error.message)
    })

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ name, email, password: hash })
                .then(result => res.json({ status: "Ok" }))
                .catch(error => res.json(error))
        })
        .catch(error => res.json(error))
})

app.listen(PORT);