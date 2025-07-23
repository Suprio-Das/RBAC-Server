const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const PORT = process.env.PORT || 4000;


// Middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("RBAC server is running!!!");
})

app.listen(PORT);