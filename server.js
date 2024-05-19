const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port ||3000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api',(req, res) => {
 res.send('hello world from API!');
});

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'client/build','index.html'));
});

app.listen(port, () => {
    console.log('server running at http://localhost:${port}');
});

