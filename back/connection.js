const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a12345',
    database: 'MercadoArtesanias'
});

module.exports = connection;