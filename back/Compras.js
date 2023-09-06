const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./Models/connection.js')

function getCompra(req, res){
    const ID = req.params.id;
    
    const sql = `SELECT * FROM Compras WHERE ID=?`;
    connection.query(sql, [ID], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
        return;
      }
  
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.send(JSON.stringify(result));
    });
}

function getCompras(req, res){
    const sql = 'SELECT * FROM Compras WHERE ESTADO IS NULL';
    connection.query(sql, function(err, result) {
        if (err) {
            console.error('Error al realizar la consulta: ' + err.stack);
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.send(JSON.stringify(result));
    });
}

//Monto, FechaYHora, MetodoPago, NumeroTarjeta, Puntaje, IDArticulo, IDUsuario, IDDireccion
//El id y el estado lo genera automaticamente la base de datos

function addCompra(req, res){
              const Monto = req.body.Monto;
              const FechaYHora = new Date();
              const MetodoPago = req.body.MetodoPago;
              const NumeroTarjeta = req.body.NumeroTarjeta;
              const Puntaje = req.body.Puntaje;
              const IDArticulo = req.body.IDArticulo;
              const IDUsuario = req.body.IDUsuario;
              const IDDireccion = req.body.IDDireccion;

              const sql = 'INSERT INTO Compras (Monto, FechaYHora, MetodoPago, NumeroTarjeta, Puntaje, IDArticulo, IDUsuario, IDDireccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
              const values = [Monto, FechaYHora, MetodoPago, NumeroTarjeta, Puntaje, IDArticulo, IDUsuario, IDDireccion];
              connection.query(sql, values, (err, result) => {
                  if (err) {
                    console.error(err);
                    res.status(500).send('Error al insertar la nueva caja');
                  } else {
                    console.log(`Compra insertada`);
                    res.status(200).send(`Compra insertada`);
                  }
                });
}

function updateCompra(req, res){
    const ID = req.body.ID;
    const Monto = req.body.Monto;
    const MetodoPago = req.body.MetodoPago;
    const NumeroTarjeta = req.body.NumeroTarjeta;
    const Puntaje = req.body.Puntaje;
    const IDArticulo = req.body.IDArticulo;
    const IDUsuario = req.body.IDUsuario;
    const IDDireccion = req.body.IDDireccion;

    const sql = 'UPDATE Compras SET Monto = ?, MetodoPago = ?, NumeroTarjeta = ?, Puntaje = ?, IDArticulo = ?, IDUsuario = ?, IDDireccion = ? WHERE ID = ?';
    const values = [Monto, MetodoPago, NumeroTarjeta, Puntaje, IDArticulo, IDUsuario, IDDireccion, ID];
    connection.query(sql, values, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error al insertar la nueva caja');
        } else {
          console.log(`Compra insertada`);
          res.status(200).send(`Compra insertada`);
        }
      });
}

function deleteCompra(req, res){
    const ID = req.params.id;
    const Fecha = new Date();
    
    const sql = `UPDATE Compras SET ESTADO = ? WHERE ID=?`;
  
    connection.query(sql, [Fecha, ID], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
        return;
      }
  
        res.status(200).send('Producto eliminado correctamente');
    });
}

module.exports = {
    getCompra,
    getCompras,
    addCompra,
    updateCompra,
    deleteCompra,
};