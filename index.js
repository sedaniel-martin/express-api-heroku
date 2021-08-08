const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
    res.send('I will never tell you about myself.');
});

app.get('/contact', (req, res) => {
    res.send('I will never let you contact me.');
});

app.listen(process.env.PORT || 3000);