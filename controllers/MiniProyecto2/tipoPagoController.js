'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Tipo_pago = db.tipo_pagos;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");

module.exports = {
    find (req, res) {
        return Tipo_pago.findAll() 
        .then(tipo_pagos => res.status(200).send(tipo_pagos))
        .catch(error => res.status(400).send(error))
    },

    async findById (req, res) {
      console.log(req.params.id)
      let id = req.params.id;
      const tipo_pagos = await Tipo_pago.findByPk(id);
        if (!tipo_pagos) {
          return res.status(404).json({ error: 'Dato no encontrado' });
        }
        res.status(200).json(tipo_pagos);
    },

    create (req, res) {
        let datos = req.body
        const datos_ingreso = { 
                nombre: datos.nombre
        };
  
        Tipo_pago.create(datos_ingreso)
        .then(tipo_pagos => {
            res.send(tipo_pagos);
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({ error: 'Error al insertar' });
        });
      },
  
      update (req, res) {
        let datos = req.body
          Tipo_pago.update(
            { 
                nombre: datos.nombre
            },
            { 
              where: { 
                id: datos.id 
              }
            }
          )
          .then(tipo_pagos => res.status(200).send('El registro ha sido actualizado'))
          .catch(error => {
              console.log(error)
              return res.status(500).json({ error: 'Error al actualizar' });
          });
      },
};