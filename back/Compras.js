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
  if(!req.body.ID){
      return res.status(400).send("Ingrese un ID");
  }
      try {
          const result = await CompraModels.getCompras(req);
          res.json(result); // Retorna el resultado
        } catch (error) {
          res.status(500).send(error);
        }
  }