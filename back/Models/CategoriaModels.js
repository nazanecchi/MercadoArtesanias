const connection = require('./connection.js')

function getCategoria(req){
    const sql = "SELECT * FROM Categorias WHERE ID = ? AND ESTADO IS NULL"
    const values = req.body.ID
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(result[0])
          });
    })
}

function getCategorias(req){
    const sql = "SELECT * FROM Categorias WHERE ESTADO IS NULL"
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(result)
          });
    })
}

async function validarCategoria(IDCategoria){
  const id = {
      body : {
          ID : IDCategoria
      } 
  }
  try{
      const result = await getCategoria(id)
      if(!result){
      return false;
      }else{
      return true;
      }
  } catch(err){
      res.send(err)
  }
}

module.exports = {
    getCategoria,
    getCategorias,
    validarCategoria
}