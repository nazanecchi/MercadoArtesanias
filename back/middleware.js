const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./connection.js')
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

module.exports = {
    validateToken
};