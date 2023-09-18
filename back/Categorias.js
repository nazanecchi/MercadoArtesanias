const express = require('express');
const app = express();
const CategoriaModels = require('./Models/CategoriaModels');

async function getOne(req, res){
    if(!req.body.ID){
        res.state(400).send("Ingrese un ID");
    }

    try {
        const result = await CategoriaModels.getCategoria(req);
        res.json(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
}

async function getAll(req, res){
    try {
        const result = await CategoriaModels.getCategorias();
        res.json(result); // Retorna el resultado
        } catch (error) {
        res.status(500).send(error);
        }
}

module.exports = {
    getOne,
    getAll
}