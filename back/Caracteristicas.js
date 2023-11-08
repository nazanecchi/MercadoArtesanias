const express = require('express');
const app = express();
const CategoriaModels = require('./Models/CategoriaModels');
const CaracteristicaModels = require('./Models/CaracteristicaModels');

async function getOne(req, res){
    if(!req.body.ID){
        res.state(400).send("Ingrese un ID");
    }
    console.log(req.body.ID);
    try {
        const result = await CaracteristicaModels.getCaracteristica(req);
        res.status(200).json(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
}

async function getAll(req, res){
    if(!req.body.IDCategoria){
        res.status(400).send("No se ingreso una categoria");
        return;  
    }
    const validar = await CategoriaModels.validarCategoria(req.body.IDCategoria);
    if(validar == false){
        res.status(400).send("No existe la categoria")
        return;
    }
    try {
        const result = await CaracteristicaModels.getCaracteristicas(req);
        res.json(result); // Retorna el resultado
        } catch (error) {
        res.status(500).send(error);
        }
}

module.exports = {
    getOne,
    getAll
}