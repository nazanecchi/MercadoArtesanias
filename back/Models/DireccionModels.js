const connection = require('./connection.js')

function getDireccion(req){
  var sql = "SELECT * FROM Direcciones WHERE ESTADO is null and ID = ?";
  var values = [req.body.ID];

  return new Promise((resolve, reject) => {
      connection.query(sql, values, (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
            return;
          }
          resolve(result[0])
        });
  })
}

function getDirecciones(req){
    var sql = "SELECT * FROM Direcciones WHERE ESTADO is null and IDUsuario = ?";
    var values = [req.body.ID];

    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
              console.log(err);
              reject(err);
              return;
            }
            resolve(result)
          });
    })
}

function addDireccion(req){
  var sql = "INSERT INTO Direcciones (Calle, Altura, Departamento, IDUsuario) VALUES (?, ?, ?, ?)";
  var values = [req.body.Calle, req.body.Altura, req.body.Departamento, req.body.IDUsuario];

    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
              console.log(err);
              reject(err);
              return;
            }
            resolve("Direccion agregada correctamente")
          });
    })
}

function updateDireccion(req){
  var sql = "UPDATE direcciones SET Calle = ?, Altura = ?, Departamento = ?, IDUsuario = ? WHERE ID = ?"
  var values = [req.body.Calle, req.body.Altura, req.body.Departamento, req.body.IDUsuario, req.body.ID];

  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve("Direccion actualizada correctamente")
      });
})
}

async function deleteDireccion(id){
  const Fecha = new Date();
  var sql = "UPDATE direcciones SET ESTADO = ? WHERE ID = ?"
  var values = [Fecha, id];

  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve("Direccion eliminado correctamente")
      });
})
}

async function validarDireccion(IDDireccion){
  const id = {
      body : {
          ID : IDDireccion
      } 
  }
  try{
      const result = await getDireccion(id)
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

module.exports = {
    getDireccion,
    getDirecciones,
    addDireccion,
    updateDireccion,
    deleteDireccion,
    validarDireccion
}