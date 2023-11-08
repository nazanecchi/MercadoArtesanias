const UsuarioModels = require("./Models/UsuarioModels");
const DireccionModels = require("./Models/DireccionModels");
const ArticuloModels = require("./Models/ArticuloModels");
const CompraModels = require("./Models/CompraModels");

async function getOne(req, res){
  if(!req.body.ID){
      return res.status(400).send("Ingrese un ID");
  }
  try {
      const result = await CompraModels.getCompra(req);
      res.json(result); // Retorna el resultado
    } catch (error) {
      res.status(500).send(error);
    }
}

async function getAll(req, res){
    try {
        const result = await CompraModels.getCompras(req);
        res.json(result); // Retorna el resultado
      } catch (error) {
        res.status(500).send(error);
      }
  }

  async function add(req, res){
    const valid = await validar(req);
    if(valid != true){
      res.status(400).send(valid);
      return;
    }
    const articulo = {
      body : {
        ID : req.body.IDArticulo
    }};
    req.Monto = ArticuloModels.getArticulo(articulo).PrecioActual;
    try {
      var result = await CompraModels.addCompra(req);
    } catch (error) {
      res.status(500).send(error);
    }
    try{
      result = await ArticuloModels.updateVendidos(req.body.IDArticulo, req.body.Cantidad);
      res.send(result); // Retorna el resultado
    } catch(error){
      res.status(500).send(error);
    }
  }

  async function validar(req){
    if(!req.body.IDArticulo, !req.body.Cantidad, !req.body.IDUsuario, !req.body.IDDireccion, !req.body.MetodoPago)
    {
      return "Faltan campos obligatorios";
    }
    if((await ArticuloModels.validarArticulo(req.body.IDArticulo)) == false){
      return "Articulo invalido";
    }
    if(await UsuarioModels.validarUsuario(req.body.IDUsuario) == false){
      return "Usuario invalido";
    }
    const articulo = {
      body : {
        ID : req.body.IDArticulo
      }
    }; 
    const art = await ArticuloModels.getArticulo(articulo);

    if(await art.IDUsuario === req.body.IDUsuario){
      return "No puede comprarse a si mismo";
    }
    if(await DireccionModels.validarDireccion(req.body.IDDireccion) == false){
      return "Direccion invalida";
    }
    if(req.body.Cantidad > (art.Cantidad - art.Vendidos)){
      return "No hay suficiente stock";
    }
    if(req.body.MetodoPago != "EFECTIVO" && req.body.MetodoPago != "TARJETA"){
      return "Metodo de pago invalido";
    }
    return true;

  }

  module.exports = {
    getOne,
    getAll,
    add
  }