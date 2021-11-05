const express = require('express');
const app = express();
const PORT = 3003;
const path = require('path');
app.use(express.static('public'));



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/productCart', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
})

app.get('/productDetail', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})



app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}http://localhost:${PORT}`))