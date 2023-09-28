const connection = require('./connection.js')

function getCompra(req){
    const sql = "SELECT * FROM Compras WHERE ID = ? AND ESTADO IS NULL"
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

function getCompras(req){
    const sql = "SELECT * FROM Compras WHERE ID = ? AND ESTADO IS NULL"
    const values = req.body.ID
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

module.exports = {
    getCompra,
    getCompras
};