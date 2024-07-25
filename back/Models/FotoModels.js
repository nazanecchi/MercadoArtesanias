const connection = require('./connection.js')

function addFoto(data, req, nombre){
    var values = [data.esPrincipal, req.params.id, nombre];
    var sql = "INSERT INTO Fotos (esPrincipal, IDArticulo, RutaFoto) VALUES (?, ?, ?)";
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
            console.log(err);
            reject(err);
            return;
            }
            resolve("Agrega foto " + req.files[i].path);
        });
        })
}

function getFotos(req){
    var sql = "SELECT RutaFoto FROM Fotos WHERE IDArticulo = ? ORDER BY esPrincipal";
    var values = [req.params.id];

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

module.exports = {
    addFoto,
    getFotos
}