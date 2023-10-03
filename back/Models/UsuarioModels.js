const connection = require('./connection.js');

function getUsuario(req){
    if(req.body.ID){
        var sql = 'SELECT * FROM Usuarios WHERE ID = ? and ESTADO IS NULL';
        var values = [req.body.ID];

        if(req.body.Username){
            sql = 'SELECT * FROM Usuarios WHERE Username = ? and ID <> ? and ESTADO IS NULL';
            values = [req.body.Username, req.body.Id];
        }

        if(req.body.Mail){
            sql = 'SELECT * FROM Usuarios WHERE Mail = ? and ID <> ? and ESTADO IS NULL';
            values = [req.body.Mail, req.body.Id];
        }
    }
    else
    {
        if(req.body.Username){
            var sql = 'SELECT * FROM Usuarios WHERE Username = ? and ESTADO IS NULL';
            var values = [req.body.Username];
        }

        if(req.body.Mail){
            var sql = 'SELECT * FROM Usuarios WHERE Mail = ? and ESTADO IS NULL';
            var values = [req.body.Mail];
        }
    }
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            reject(err); // Rechaza la promesa en caso de error
            return;
        }
        resolve(result[0]); // Resuelve la promesa con el resultado
        });
    });
}

function getUsuarios(){
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM Usuarios WHERE ESTADO IS NULL';
        connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            reject(err); // Rechaza la promesa en caso de error
            return;
        }
        resolve(result); // Resuelve la promesa con el resultado
        });
    });
}

function addUsuario(req){
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Mail = req.body.Mail;
    const Username = req.body.Username;
    const Password = req.body.Password;
    const TipoUsuario = req.body.TipoUsuario;
    return new Promise((resolve, reject) =>{
        const sql = 'INSERT INTO Usuarios (Nombre, Apellido, Mail, Username, Password, TipoUsuario) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [Nombre, Apellido, Mail, Username, Password, TipoUsuario];
        connection.query(sql, values, (err, result) => {
            if (err) {
                console.log(err + "Soy yo");
                console.log("Llego aca");
                reject(err);
            } else {
                console.log(`Usuario insertado`);
                resolve("Usuario añadido")
            }
            });
    });
}

function updateUsuario(req){
    const ID = req.body.ID;
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Mail = req.body.Mail;
    const Username = req.body.Username;
    const Password = req.body.Password;
    const TipoUsuario = req.body.TipoUsuario;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Usuarios SET Nombre = ?, Apellido = ?, Mail = ?, Username = ?, Password = ?, TipoUsuario = ? WHERE ID = ?';
        const values = [Nombre, Apellido, Mail, Username, Password, TipoUsuario, ID];
        connection.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            reject(err);
            return;
        } else {
            resolve(`Usuario insertado con ID: ` + ID);
        }
        });
    })
        
}

function deleteUsuario(ID){
    return new Promise((resolve, reject) => {
        const Fecha = new Date();
        const sql = `UPDATE Usuarios SET ESTADO = ? WHERE ID=? AND ESTADO IS NULL`;
        connection.query(sql, [Fecha, ID], (err, result) => {
            if (err) {
              console.log(err);
              reject(err)
            }else{
                if(result.affectedRows != 0){
                    resolve("Articulo eliminado")
                    }else{
                    console.log(`ID incorrecto`);
                    resolve("ID incorrecto");
                    }
            }
          });
    });
}

async function validarUsuario(IDUsuario){
    const id = {
        body : {
            ID : IDUsuario
        } 
    }
    try{
        const result = await getUsuario(id)
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
    getUsuario,
    getUsuarios,
    addUsuario,
    updateUsuario,
    deleteUsuario,
    validarUsuario
}