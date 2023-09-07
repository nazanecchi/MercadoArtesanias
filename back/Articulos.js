const connection = require('./Models/connection.js');
const ArticuloModels = require('./Models/ArticuloModels');
const UsuarioModels = require('./Models/UsuarioModels');
const CategoriaModels = require('./Models/CategoriaModels.js');

async function getOne(req, res){
    if(!req.body.ID){
        return res.status(400).send("Ingrese un ID");
    }
    try {
        const result = await ArticuloModels.getArticulo(req);
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
            const result = await ArticuloModels.getArticulos(req);
            res.json(result); // Retorna el resultado
          } catch (error) {
            res.status(500).send(error);
          }
    }

async function add(req, res){
        const validacion = await validarArticulo(req);
        if(validacion == true){
            try{
                const result = await ArticuloModels.addArticulo(req);
                console.log("Entro aca");
                res.send(result);
            } catch(err){
                res.status(500).send(err);
            }
        }
        else{
            res.status(200).send(validacion);
        }
    }

async function update(req, res){
        if(!req.body.ID){
            res.status(200).send("Falta el ID");
            return;
        }
        const validacion = await validarArticulo(req);
        if(validacion == true){
            try{
                const result = await ArticuloModels.updateArticulo(req);
                res.send(result);
            } catch(err){
                res.status(500).send(err);
            }
        }
        else{
            res.status(200).send(validacion);
        }
}

 async function dlt(req, res){
        const ID = req.body.ID;
        if(!req.body.ID){
            return res.status(400).send("Ingrese un ID");
        }
        try{
            const result = await ArticuloModels.deleteArticulo(ID);
            res.send(result);
        } catch(err){
            res.status(500).send(err);
        }
    }


async function validarCategoria(req){
    const id = {
        body : {
            ID : req.body.IDCategoria
        } 
    }
    try{
        const result = await CategoriaModels.getCategoria(id)
        console.log(result + "H")
        if(!result){
        console.log("No existe el usuario");
        return false;
        }else{
        return true;
        }
    } catch(err){
        res.send(err)
    }
}

async function validarUsuario(req){
    const id = {
        body : {
            ID : req.body.IDUsuario
        } 
    }
    try{
        const result = await UsuarioModels.getUsuario(id)
        console.log(result + "H")
        if(!result){
        console.log("No existe el usuario");
        return false;
        }else{
        return true;
        }
    } catch(err){
        res.send(err)
    }
}


async function validarArticulo(req){
    if(!req.body.Nombre || !req.body.PrecioActual || !req.body.Cantidad || !req.body.IDUsuario || !req.body.IDCategoria){
        return "Faltan campos obligatorios";
    }
    else
    {
        if(req.body.Nombre.length < 8){
            return "El nombre tiene menos de 8 letras";
        }

        if(req.body.PrecioActual == 0){
            return "El precio no puede ser 0";
        }

        if(req.body.Cantidad == 0){
            return "La cantidad no puede ser 0";
        }
        if(await validarUsuario(req) != true){
            return "No existe el usuario"
        }

        if(await validarCategoria(req) != true){
            return "No existe la categoria"
        }
        
        
        
    }

    return true;
}


module.exports = {
    getOne,
    getAll,
    add,
    update,
    dlt
};