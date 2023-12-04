const connection = require('./connection.js')

function getContenido(req){
    const sql = "SELECT * FROM Contenidos WHERE ID = ? AND ESTADO IS NULL"
    const values = req.body.ID;
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

function addContenido(req){
    var sql = "INSERT INTO Contenidos (Descripcion, IDArticulo, IDCaracteristica) "+ 
                "SELECT '', ?, c.ID "+
                "FROM Caracteristicas c "+
                "WHERE c.IDCategoria = ?;";
    var values = [req.body.IDArticulo, req.body.IDCategoria];
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log(`Contenido insertado`);
                resolve("Contenido añadido")
            }
            });
    })

}

function getLastId(IDArticulo){
    var sql = "SELECT ID FROM Contenidos WHERE IDArticulo = ?";
    var values = [IDArticulo];
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log(result);
                resolve(result)
            }
            });
    })
}

function updateContenido(req){
    var sql = "UPDATE Contenidos SET Descripcion = ?, IDArticulo = ?, IDCaracteristica = ? WHERE ID = ?";
    var values = [req.body.Descripcion, req.body.IDArticulo, req.body.IDCaracteristica, req.body.ID];
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log(`Contenido actualizado`);
                resolve({message : 'Contenido actualizado'})
            }
            });
    })

}

async function validarContenido(IDContenido){
    const id = {
        body : {
            ID : IDContenido
        } 
    }
    try{
        const result = await getContenido(id)
        console.log(result.Descripcion);
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
    getContenido,
    getLastId,
    addContenido,
    updateContenido,
    validarContenido
}

