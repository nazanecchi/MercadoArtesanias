const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const UsuarioModels = require('./Models/UsuarioModels');
require('dotenv').config();

async function getOne(req, res){
    try {
        const result = await UsuarioModels.getUsuario(req);
        return res.status(200).json(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
}


async function getAll(req, res){
    try {
        const result = await UsuarioModels.getUsuarios();
        res.json(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
}

async function add(req, res) {
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Mail = req.body.Mail;
    const Username = req.body.Username;
    const Password = req.body.Password;
    const TipoUsuario = req.body.TipoUsuario;
    const validacionUsuario = await validarUsuario(Nombre, Apellido, Mail, Username, Password, TipoUsuario);
    if(validacionUsuario == true){
        try {
            const result = await UsuarioModels.addUsuario(req);
            res.status(200).send({resultado: result}); // Retorna el resultado
          } catch (error) {
            res.status(500).send(error);
          }
    }
    else
    {
        res.status(400).send(validacionUsuario);
    }
}

async function update(req, res){
    const ID = req.body.ID;
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Mail = req.body.Mail;
    const Username = req.body.Username;
    const Password = req.body.Password;
    const TipoUsuario = req.body.TipoUsuario;
    if(!req.body.ID){
        res.status(400).send("Falta el ID");
        return;
      }else{
        if(await UsuarioModels.validarUsuario(req.body.ID)!=true){
          res.status(400).send("ID inexistente");
          return;
        }
      }
    const validacionUsuario = await validarUsuario(Nombre, Apellido, Mail, Username, Password, TipoUsuario, ID);
    if(validacionUsuario == true){
        try {
            const result = await UsuarioModels.updateUsuario(req);
            res.status(200).send(result); // Retorna el resultado
          } catch (error) {
            res.status(500).send(error);
          }
    }
    else
    {
        res.status(400).send(validacionUsuario);
    }
            
}


async function dlt(req, res){
    if(!req.body.ID){
        return res.status(400).send("Falta el ID");
    }
    try {
        const result = await UsuarioModels.deleteUsuario(req.body.ID);
        return res.status(200).send(result); // Retorna el resultado
      } catch (error) {
        return res.status(500).send(error);
      }
}



async function usernameDisponible(username, id) {
    const json = {
        body : {
                Username : username,
                ID : id
            }
    }

    try {
        const result = await UsuarioModels.getUsuario(json);
        if(result){
            return false;
        }
        else{
            return true;
        }
      } catch (error) {
        res.status(500).send(error);
      }
}


async function mailDisponible(mail, id) {
    const json = {
        body : {
            Mail : mail,
            ID : id
        }
    }
    try {
        const result = await UsuarioModels.getUsuario(json);
        if(result){
            return false;
        }
        else{
            return true;
        }
      } catch (error) {
        res.status(500).send(error);
      }
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

async function validarUsuario(Nombre, Apellido, Mail, Username, Password, TipoUsuario, ID)
{
    if(!Nombre || !Apellido || !Mail || !Username || !Password)
    {
        return "Campos incompletos";
    }

    if(CorreoValido(Mail) != true){
        return "Formato correo incorrecto";
    }

    if(passwordValida(Password) != true){
        return "Contraseña invalida";
    }

    if((TipoUsuario != "ADMIN" && TipoUsuario != "USER"))
    {
        return "Tipo de usuario incorrecto";
    }
    
    if(await usernameDisponible(Username, ID) == false)
    {
        return "Username en uso"
    }

    if(await mailDisponible(Mail, ID) == false)
    {
        return "Mail en uso"
    }
    return true;
}




module.exports = {
    getAll,
    getOne,
    add,
    update,
    dlt
};