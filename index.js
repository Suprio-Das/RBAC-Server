const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("RBAC server is running!!!");
})

app.listen(PORT);