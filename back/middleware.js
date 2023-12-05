const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./Models/connection.js')
const jwt = require('jsonwebtoken');
require('dotenv').config();

function validateToken(req, res, next){
    if(!("token" in req.body)) return res.status(403).send("Acceso denegado");
    const token = req.body.Token;
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err){
            return res.send("Acceso denegado");
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
                    token: token,
                    ID: user.ID
                }
                res.json(Vuelta);
        } else {
            res.status(400).send({error:'Usuario o contraseña incorrectos'});
        }
    });}
    else{
        res.status(400).send({error:'faltan datos'});
    }
}

function generateToken(user) {
    return jwt.sign(user, process.env.SECRET, { expiresIn: '15m' });
}

module.exports = {
    validateToken,
    login
};