const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./connection.js')

function getUsuario(req, res){
    const ID = req.params.id;
    
    const sql = `SELECT * FROM Usuarios WHERE ID=?`;
    connection.query(sql, [ID], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
        return;
      }
  
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.send(JSON.stringify(result));
    });
}

function getUsuarios(req, res){
    const sql = 'SELECT * FROM Usuarios WHERE ESTADO IS NULL';
    connection.query(sql, function(err, result) {
        if (err) {
            console.error('Error al realizar la consulta: ' + err.stack);
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.send(JSON.stringify(result));
    });
}

async function addUsuario(req, res) {
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Mail = req.body.Mail;
    const Username = req.body.Username;
    const Password = req.body.Password;
    const validacionUsuario = await validarUsuario(0, Nombre, Apellido, Mail, Username, Password);
    if(validacionUsuario == true){
        const sqlInsertUsuario = 'INSERT INTO Usuarios (Nombre, Apellido, Mail, Username, Password) VALUES (?, ?, ?, ?, ?)';
        const values = [Nombre, Apellido, Mail, Username, Password];
        connection.query(sqlInsertUsuario, values, (err, result) => {
            if (err) {
            console.error(err);
            res.status(500).send('Error al insertar el usuario');
            } else {
            console.log(`Usuario insertado`);
            res.status(200).send(`Usuario insertado`);
            }
            });
    }
    else
    {
        res.status(400).send(validacionUsuario);
    }
}

async function updateUsuario(req, res){
    const ID = req.body.ID;
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Mail = req.body.Mail;
    const Username = req.body.Username;
    const Password = req.body.Password;
    const validacionUsuario = await validarUsuario(ID, Nombre, Apellido, Mail, Username, Password);
    if(validacionUsuario == true){
        const sql = 'UPDATE Usuarios SET Nombre = ?, Apellido = ?, Mail = ?, Username = ?, Password = ? WHERE ID = ?';
        const values = [Nombre, Apellido, Mail, Username, Password, ID];
        connection.query(sql, values, (err, result) => {
        if (err) {
        console.error(err);
        res.status(500).send('Error al insertar usuario');
        } else {
        console.log(`Usuario insertado`);
        res.status(200).send(`Usuario insertado`);
        }
        });
    }
    else
    {
        res.status(400).send(validacionUsuario);
    }
            
}


function deleteUsuario(req, res){
    const ID = req.params.id;
    const Fecha = new Date();
    
    const sql = `UPDATE Usuarios SET ESTADO = ? WHERE ID=?`;
  
    connection.query(sql, [Fecha, ID], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
        return;
      }
  
        res.status(200).send('Usuario eliminado correctamente');
    });
}



function usernameDisponible(username, id) {
    return new Promise((resolve, reject) => {
        if(id === 0)
        {
            var sql = `SELECT * FROM Usuarios WHERE Username=?`;
            var values = [username];
        }
        else
        {
            var sql = `SELECT * FROM Usuarios WHERE Username=? AND ID <> ?`;
            var values = [username, id];
        }
        
        connection.query(sql, values, (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            
            if (result.length === 0) {
                console.log(result);
                console.log("username disponible");
                resolve("Username disponible");
            } else {
                console.log("username en uso");
                reject("Username en uso");
            }
        });
    });
}


function mailDisponible(mail, id) {
    return new Promise((resolve, reject) => {
        if(id === 0)
        {
            var sql = `SELECT * FROM Usuarios WHERE Mail=?`;
            var values = [mail];
        }
        else
        {
            var sql = `SELECT * FROM Usuarios WHERE Mail=? AND ID <> ?`;
            var values = [mail, id];
        }
        
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
                console.log("ESTOY ERRANDO");
                return;
            }
            
            if (result.length === 0) {
                console.log("Mail disponible");
                resolve("Mail disponible");
            } else {
                console.log("Mail en uso");
                reject("Mail en uso");
            }
        });
    });
}

function passwordValida(password) {
    const regexMayuscula = /[A-Z]/;
    const regexNumero = /[0-9]/;
    const regexCaracterEspecial = /[!@#$%^&*()\-_=+[\]{}|;:'",.<>/?\\]/;
    
    if (password.length < 8) {
        return false;
    }
    
    if (!regexMayuscula.test(password)) {
        return false;
    }
    
    if (!regexNumero.test(password)) {
        return false;
    }
    
    if (!regexCaracterEspecial.test(password)) {
        return false;
    }
    
    return true;
}

function CorreoValido(cadena) {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexCorreo.test(cadena);
}

async function validarUsuario(ID, Nombre, Apellido, Mail, Username, Password)
{
    respuesta = true;
    if(Nombre == null || Apellido == null || Mail == null || Username == null || Password == null)
    {
        respuesta = "Campos incompletos";
    }

    if(CorreoValido(Mail) != true && respuesta){
        respuesta = "Formato correo incorrecto";
    }

    if(passwordValida(Password) != true && respuesta){
        respuesta = "Contraseña invalida";
    }
    if(respuesta){

        await mailDisponible(Mail, ID).catch(err => {
            respuesta =  err;
        });

        await usernameDisponible(Username, ID).catch(err => {
            respuesta =  err;
        });
    }
    return respuesta;
}

module.exports = {
    getUsuario,
    getUsuarios,
    addUsuario,
    updateUsuario,
    deleteUsuario
};