const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("RBAC server is running!!!");
})

app.listen(PORT);