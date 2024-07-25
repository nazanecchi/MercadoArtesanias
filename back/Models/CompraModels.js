const connection = require('./connection.js')

function getCompra(req){
    const sql = "SELECT * FROM Compras WHERE ID = ? AND ESTADO IS NULL"
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

function getCompras(req){
    const sql = "SELECT * FROM Compras WHERE ESTADO IS NULL";
    const values = [];
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

function addCompra(req){
    var sql = "INSERT INTO Compras(Monto, FechaYHora, MetodoPago, IDArticulo, Cantidad, IDUsuario, IDDireccion) VALUES (?, NOW(), ?, ?, ?, ?, ?); ";
    var values = [req.body.Monto, req.body.MetodoPago, req.body.IDArticulo, req.body.Cantidad, req.body.IDUsuario, 1000];
    connection.query(sql, values);
} 

module.exports = {
    getCompra,
    getCompras,
    addCompra
};