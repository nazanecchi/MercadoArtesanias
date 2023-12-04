const FotoModels = require('./Models/FotoModels');
const ArticuloModels = require('./Models/ArticuloModels');
const path = require('path');
const fs = require('fs');

async function add(req, res, nombres){
    console.log(nombres);
    const val = await validar(req);
    console.log(val);
    if(val != true){
        res.status(400).send({error:val});
        return val;
    }
    var data = {};
    for(i in req.files){
        data.i = i;
        if(i == 0){
            data.esPrincipal = 1;
        }else{
            data.esPrincipal = 0;
        }
        try{
            result = await FotoModels.addFoto(data, req, nombres[i]);
        } catch(err){
            res.status(500).send({error:err});
            return;
        }
    }
    return res.status(200).send({mensaje:'Archivo cargado con éxito'});
}

async function getAll(req, res){
    try {
        const result = await FotoModels.getFotos(req);
        const imagenes = [];
        console.log(result);
        result.forEach((foto) => {
            console.log(foto);
            imagenes.push("FotosArticulos/" + foto.RutaFoto);
  });
        res.send(imagenes);
      } catch (error) {
        res.status(500).send(error);
      }
}

async function validar(req){
    console.log(req.params.id);
    console.log(req.files);
    if(!req.params.id || !req.files){
        return "Faltan campos obligatorios";
    }
    if((await ArticuloModels.validarArticulo(req.params.id)) == false){
        return "Articulo Inexistente";
    }
    return true;
}

module.exports = {
    add,
    getAll
}