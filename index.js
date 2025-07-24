const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const UserModel = require('./Models/User');
dotenv.config()
const app = express();
const PORT = process.env.PORT || 4000;


// Middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("RBAC server is running!!!");
})

// MongoDB Connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.63zdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const database = client.db('RBAC-Test');

        // Register
        app.post('/register', (req, res) => {
            const { name, email, password } = req.body;
            bcrypt.hash(password, 10);
        })

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("MongoDB connected")
    }
}
run().catch(console.dir);


app.listen(PORT);