const express = require('express');
const app = express();
const PORT = 3003;
const path = require('path');
app.use(express.static('public'));

/* EJS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* CAPTURA DE INFORMACIÓN (todo lo que llegue en el form lo queremos capturar como objeto literal) */
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

/* METHOD-OVERRIDE (PUT y DELETE)*/
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/* MULTER (Insertar archivos)*/
const multer = require('multer');
const res = require('express/lib/response');

/* ROUTES */
let homeRoute = require('./routes/indexRouter');

/*  */
app.use('/home', homeRoute);



/* app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/productCart', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
})

app.get('/productDetail', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
}) */


/* PUERTO */
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`))

/* ANTES -> 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'))
}) */

/* INSTALACIONES NECESARIAS */
/* npm install ejs */
/* npm install method-override (para métodos PUT y DELETE)*/
/* npm install multer (subida de archivos)*/
/*  */
/*  */