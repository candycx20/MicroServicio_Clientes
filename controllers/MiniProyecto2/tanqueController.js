'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Tanque = db.tanques;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");

module.exports = {
    find (req, res) {
        return Tanque.findAll() 
        .then(tanques => res.status(200).send(tanques))
        .catch(error => res.status(400).send(error))
    },

    async findById (req, res) {
      console.log(req.params.id)
      let id = req.params.id;
      const tanques = await Tanque.findByPk(id);
        if (!tanques) {
          return res.status(404).json({ error: 'Dato no encontrado' });
        }
        res.status(200).json(tanques);
    },

    create (req, res) {
        let datos = req.body
        const datos_ingreso = { 
                capacidad: datos.capacidad,
                nivel_actual: datos.nivel_actual,
                ubicacion: datos.ubicacion,
                id_tipo_gasolina: datos.id_tipo_gasolina,
                id_cliente: datos.id_cliente,
                id_tipo_pago: datos.id_tipo_pago
        };
  
        Tanque.create(datos_ingreso)
        .then(tanques => {
            res.send(tanques);
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({ error: 'Error al insertar' });
        });
      },
  
      update (req, res) {
        let datos = req.body
          Tanque.update(
            { 
                capacidad: datos.capacidad,
                nivel_actual: datos.nivel_actual,
                ubicacion: datos.ubicacion,
                id_tipo_gasolina: datos.id_tipo_gasolina,
                id_cliente: datos.id_cliente,
                id_tipo_pago: datos.id_tipo_pago
            },
            { 
              where: { 
                id: datos.id 
              }
            }
          )
          .then(tanques => res.status(200).send('El registro ha sido actualizado'))
          .catch(error => {
              console.log(error)
              return res.status(500).json({ error: 'Error al actualizar' });
          });
      },
};