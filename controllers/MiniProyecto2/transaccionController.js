'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Transaccion = db.transacciones;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");

module.exports = {
    find (req, res) {
        return Transaccion.findAll() 
        .then(transacciones => res.status(200).send(transacciones))
        .catch(error => res.status(400).send(error))
    },

    async findById (req, res) {
      console.log(req.params.id)
      let id = req.params.id;
      const transacciones = await Transaccion.findByPk(id);
        if (!transacciones) {
          return res.status(404).json({ error: 'Dato no encontrado' });
        }
        res.status(200).json(transacciones);
    },

    create (req, res) {
        let datos = req.body
        const datos_ingreso = { 
                cantidad_vendida: datos.cantidad_vendida,
                precio_galon: datos.precio_galon,
                fecha: datos.fecha,
                id_cliente: datos.id_cliente,
                id_vendedor: datos.id_vendedor,
                total: datos.total
        };
  
        Transaccion.create(datos_ingreso)
        .then(transacciones => {
            res.send(transacciones);
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({ error: 'Error al insertar' });
        });
      },
  
      update (req, res) {
        let datos = req.body
          Transaccion.update(
            { 
                capacidad: datos.capacidad,
                nivel_actual: datos.nivel_actual,
                ubicacion: datos.ubicacion,
                id_cliente: datos.id_cliente,
                id_vendedor: datos.id_vendedor,
                total: datos.total
            },
            { 
              where: { 
                id: datos.id 
              }
            }
          )
          .then(transacciones => res.status(200).send('El registro ha sido actualizado'))
          .catch(error => {
              console.log(error)
              return res.status(500).json({ error: 'Error al actualizar' });
          });
      },
};