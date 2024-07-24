const DireccionModels = require('./Models/DireccionModels');
const UsuarioModels = require('./Models/UsuarioModels');

async function getOne(req, res){
  if(!req.body.ID){
        return res.status(400).send("Ingrese un ID");
    }
    try {
        const result = await DireccionModels.getDireccion(req);
        res.json(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
}

async function getAll(req, res){
    if(!req.body.ID){
        return res.status(400).send("Ingrese un ID");
    }
    try {
        const result = await DireccionModels.getDirecciones(req);
        res.json(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
}

async function add(req, res){
    validacion = validarDireccion(req);
    if(validacion){
    try {
        const result = await DireccionModels.addDireccion(req);
        res.send(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
    }
}

async function update(req, res){
  if(!req.body.ID){
    res.send("Ingrese un ID");
    return;
  }else{
    if(await DireccionModels.validarDireccion(req.body.ID)!=true){
      res.send("ID invalido");
      return;
    }
  }
  validacion = await validarDireccion(req);
  if(validacion === true){
    try {
        const result = await DireccionModels.updateDireccion(req);
        res.send(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
    }
    else{
      res.status(400).send(validacion)
    }

}

async function dlt(req,res){
  if(!req.body.ID){
    res.send("Ingrese un ID");
    return;
  }else{
    if(await DireccionModels.validarDireccion(req.body.ID)!=true){
      res.send("ID invalido");
      return;
    }
  }
  try {
    const result = await DireccionModels.deleteDireccion(req.body.ID);
    res.send(result); // Retorna el resultado
  } catch (error) {
    res.status(500).send(error);
  }
}


async function validarDireccion(req){
    if(!req.body.Calle || !req.body.Altura || !req.body.IDUsuario){
      return "Faltan campos obligatorios"
    }

    if(req.body.Calle.lenght < 2){
      return "Calle invalida"
    }

    if (typeof req.body.Altura != 'number' || !Number.isInteger(req.body.Altura)) {
      return "La altura debe ser un entero"
    }

    if(await UsuarioModels.validarUsuario(req.body.IDUsuario) != true){
      return "Usuario invalido"
    }

    return true;
}

module.exports = {
    getOne,
    getAll,
    add,
    update,
    dlt
}