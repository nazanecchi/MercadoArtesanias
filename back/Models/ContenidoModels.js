const connection = require('./connection.js')

function getContenido(req){
    var sql = "SELECT * FROM Contenidos WHERE ESTADO is null"
    var values = [];

    //if(req.body.ID){
    //    sql += " AND ID = ?";
    //    values.push(req.body.ID);
    //}

    if(req.body.IDArticulo){
        sql += " AND IDArticulo = ?";
        values.push(req.body.IDArticulo);
    }

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
    getContenido,
    getLastId,
    addContenido,
    updateContenido,
    validarContenido
}

