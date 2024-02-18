//Modulos
//require('dotenv').config();
require('./config/constants');
const express = require('express');
const path = require('path');
const cors = require('cors');

//inicializacion de express
const app = express();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'storage')));

//settings declarando puerto del servidor
app.set('port', port);

//apartado de routes
app.use('/api',require('./routes/auth'));
app.use('/api',require('./routes/songs'));
app.use('/api',require('./routes/storage'));
//app.use('/api',require('./routes/users'));

//exportar app
module.exports = app;