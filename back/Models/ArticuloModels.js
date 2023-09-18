const connection = require('./connection.js')

function getArticulo(req){
    const sql = "SELECT * FROM Articulos WHERE ID = ? AND ESTADO IS NULL"
    const values = req.body.ID
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

function getArticulos(req){
    var sql = "SELECT * FROM Articulos WHERE ESTADO is null";
    var values = [];
    if(req.body.IDCategoria){
        sql += " AND IDCategoria = ?";
        values.push(req.body.IDCategoria); 
    }
    if(req.body.Nombre){
        sql += " AND Nombre LIKE ?";
        values.push('%' + req.body.Nombre + '%');
    }
    if(req.body.PrecioMinimo){
        sql += " AND PrecioActual > ?";
        values.push(req.body.PrecioMinimo);
    }
    if(req.body.PrecioMaximo){
        sql += " AND PrecioActual < ?";
        values.push(req.body.PrecioMaximo);
    }
    

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

function addArticulo(req){
    var sql = "INSERT INTO Articulos(Nombre, PrecioActual, Cantidad, Stock, Descripcion, PrecioEnvio, IDCategoria, IDUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    var values = [req.body.Nombre, req.body.PrecioActual, req.body.Cantidad, 0, req.body.Descripcion, req.body.PrecioEnvio, req.body.IDCategoria, req.body.IDUsuario];
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log(`Articulo insertado`);
                resolve("Articulo añadido")
            }
            });
    })

} 

function updateArticulo(req){
    var sql = "UPDATE Articulos SET Nombre = ?, PrecioActual = ?, Cantidad = ?, Descripcion = ?, PrecioEnvio = ?, IDCategoria = ? WHERE ID = ?";
    var values = [req.body.Nombre, req.body.PrecioActual, req.body.Cantidad, req.body.Descripcion, req.body.PrecioEnvio, req.body.IDCategoria, req.body.ID];
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log(`Articulo actualizado`);
                resolve("Articulo actualizado")
            }
            });
    })

} 

function deleteArticulo(id){
    const sql = `UPDATE Articulos SET ESTADO = ? WHERE ID=? AND ESTADO IS NULL`;
    const Fecha = new Date();
    const values = [Fecha, id];
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                if(result.affectedRows != 0){
                resolve("Articulo eliminado")
                }else{
                console.log(`ID incorrecto`);
                resolve("ID incorrecto");
                }
                
            }
            });
        })

}

async function validarArticulo(IDArticulo){
    const id = {
        body : {
            ID : IDArticulo
        } 
    }
    try{
        const result = await getArticulo(id)
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
    getArticulo,
    getArticulos,
    addArticulo,
    updateArticulo,
    deleteArticulo,
    validarArticulo
};