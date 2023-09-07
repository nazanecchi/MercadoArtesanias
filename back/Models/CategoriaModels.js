const connection = require('./connection.js')

function getCategoria(req){
    const sql = "SELECT * FROM Categorias WHERE ID = ?"
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

module.exports = {
    getCategoria
}