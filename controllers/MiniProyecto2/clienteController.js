'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Cliente = db.clientes;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");

module.exports = {
    find (req, res) {
        return Cliente.findAll() 
        .then(clientes => res.status(200).send(clientes))
        .catch(error => res.status(400).send(error))
    },

    async findById (req, res) {
      console.log(req.params.id)
      let id = req.params.id;
      const clientes = await Cliente.findByPk(id);
        if (!clientes) {
          return res.status(404).json({ error: 'Dato no encontrado' });
        }
        res.status(200).json(clientes);
    },

    create (req, res) {
        let datos = req.body
        const datos_ingreso = { 
                dpi: datos.dpi,
                nombre: datos.nombre,
                puntos: 0
        };
  
        Cliente.create(datos_ingreso)
        .then(clientes => {
            res.send(clientes);
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({ error: 'Error al insertar' });
        });
      },
  
      update (req, res) {
        let datos = req.body
          Cliente.update(
            { 
                dpi: datos.dpi,
                nombre: datos.nombre,
                puntos: datos.puntos
            },
            { 
              where: { 
                id: datos.id 
              }
            }
          )
          .then(clientes => res.status(200).send('El registro ha sido actualizado'))
          .catch(error => {
              console.log(error)
              return res.status(500).json({ error: 'Error al actualizar' });
          });
      },
};