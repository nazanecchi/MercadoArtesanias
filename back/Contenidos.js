const ArticuloModels = require('./Models/ArticuloModels');
const ContenidoModels = require('./Models/ContenidoModels');
const CaracteristicaModels = require('./Models/CaracteristicaModels');


async function getOne(req, res){
    if(!req.body.ID){
        return res.status(400).send("Ingrese un ID");
    }
    try {
        const result = await ContenidoModels.getContenido(req);
        res.json(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
}

async function update(req, res){
    const validacion = await validarContenido(req);
    if(validacion == true){
        try{
            const result = await ContenidoModels.updateContenido(req);
            res.send(result);
            return;
        } catch(err){
            console.log(err);
            res.status(500).send(err);
            return;
        }
    }
    else{
        console.log(validacion); 
        res.status(400).send(validacion);
        return;
    }
}

async function validarContenido(req){
    if(!('Descripcion' in req.body)|| !req.body.IDArticulo || !req.body.IDCaracteristica || !req.body.ID){
        return "Faltan campos obligatorios";
    }
    if(!(await ArticuloModels.validarArticulo(req.body.IDArticulo))){
        return "No existe el articulo";
    }
    if(!(await CaracteristicaModels.validarCaracteristica(req.body.IDCaracteristica))){
        return "No existe la caracteristica";
    }
    if(!(await ContenidoModels.validarContenido(req.body.ID))){
        return "ID incorrecto";
    }

    return true;
}

module.exports = {
    getOne,
    update
}

