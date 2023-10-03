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
        try {
            const result = await ArticuloModels.getArticulos(req);
            res.json(result); // Retorna el resultado
          } catch (error) {
            res.status(500).send(error);
          }
    }

async function add(req, res){
        const validacion = await validarArticulo(req);
        if(req.body.ID){
            res.status(400).send("No mandes ID para agregar un articulo");
            return;
        }
        if(validacion == true){
            try{
                const result = await ArticuloModels.addArticulo(req);
                console.log("Entro aca");
                res.send(result);
                return;
            } catch(err){
                res.status(500).send(err);
                return;
            }
        }
        else{
            res.status(400).send(validacion);
            return;
        }
    }

async function update(req, res){
    if(!req.body.ID){
        res.status(400).send("Ingrese un ID");
        return;
      }else{
        if(await ArticuloModels.validarArticulo(req.body.ID)!=true){
          res.status(400).send("ID invalido");
          return;
        }
      }
    const validacion = await validarArticulo(req);
    if(validacion == true){
        try{
            const result = await ArticuloModels.updateArticulo(req);
            res.send(result);
            return;
        } catch(err){
            res.status(500).send(err);
            return;
        }
    }
    else{
        res.status(400).send(validacion);
        return;
    }
}

 async function dlt(req, res){
    if(!req.body.ID){
        res.send("Ingrese un ID");
        return;
        }else{
        if(await ArticuloModels.validarArticulo(req.body.ID)!=true){
            res.send("ID invalido");
            return;
        }
      }
        try{
            const result = await ArticuloModels.deleteArticulo(req.body.ID);
            res.send(result);
            return;
        } catch(err){
            res.status(500).send(err);
            return;
        }
    }





async function validarArticulo(req){
    if(!req.body.Nombre || !req.body.PrecioActual || !req.body.Cantidad || !req.body.IDUsuario || !req.body.IDCategoria){
        return "Faltan campos obligatorios";
    }
    else
    {
        if(req.body.Nombre.length < 4){
            return "El nombre tiene menos de 4 letras";
        }

        if(req.body.PrecioActual == 0){
            return "El precio no puede ser 0";
        }

        if(req.body.Cantidad == 0){
            return "La cantidad no puede ser 0";
        }
        if(await UsuarioModels.validarUsuario(req.body.IDUsuario) != true){
            return "No existe el usuario"
        }

        if(await CategoriaModels.validarCategoria(req.body.IDCategoria) != true){
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