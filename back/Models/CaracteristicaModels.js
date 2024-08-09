const connection = require('./connection.js')

function getCaracteristica(req){
    const sql = "SELECT * FROM Caracteristicas WHERE ID = ? AND ESTADO IS NULL"
    const values = req.body.ID;
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

function getCaracteristicas(req){
    const sql = "SELECT * FROM Caracteristicas WHERE ESTADO IS NULL and IDCategoria = ?"
    const values = [req.body.IDCategoria];
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(result)
          });
    })
}

async function validarCaracteristica(IDCaracteristica){
  const id = {
      body : {
          ID : IDCaracteristica
      } 
  }
  try{
      const result = await getCaracteristica(id)
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
    getCaracteristica,
    getCaracteristicas,
    validarCaracteristica
}