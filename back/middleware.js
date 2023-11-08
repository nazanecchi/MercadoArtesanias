const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./Models/connection.js')
const jwt = require('jsonwebtoken');
require('dotenv').config();

function validateToken(req, res, next){
    const token = req.body.Token;
    if(!token) res.send("Acceso denegado");
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err){
            res.send("Acceso denegado");
        }else{
            next();
        }
    });
}

async function login(req, res) {
    const Username = req.body.Username;
    const Password = req.body.Password;

    if(Username && Password){
    const sql = "SELECT * FROM Usuarios WHERE Username = ?";
    connection.query(sql, [Username], async (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        const validacion = (result[0] && result[0].Password == Password);
        if (validacion) {
            const user = {
                ID: result[0].ID,
                ESTADO: result[0].ESTADO,
                Nombre: result[0].Nombre,
                Apellido: result[0].Apellido,
                Mail: result[0].Mail,
                Username: result[0].Username,
                TipoUsuario : result[0].TipoUsuario
            };
                const token = generateToken(user);
                const Vuelta = {
                    mensaje: 'Usuario autenticado',
                    TipoUsuario: user.TipoUsuario,
                    token: token
                }
                res.json(Vuelta);
        } else {
            res.status(350).send('Usuario o contraseña incorrectos');
        }
    });}
    else{
        res.send("Faltan datos");
    }
}

function generateToken(user) {
    return jwt.sign(user, process.env.SECRET, { expiresIn: '15m' });
}

module.exports = {
    validateToken,
    login
};