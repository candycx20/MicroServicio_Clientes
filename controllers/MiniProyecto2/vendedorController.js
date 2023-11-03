'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Vendedor = db.vendedores;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");

module.exports = {
    find (req, res) {
        return Vendedor.findAll() 
        .then(vendedores => res.status(200).send(vendedores))
        .catch(error => res.status(400).send(error))
    },

    async findById (req, res) {
      console.log(req.params.id)
      let id = req.params.id;
      const vendedores = await Vendedor.findByPk(id);
        if (!vendedores) {
          return res.status(404).json({ error: 'Dato no encontrado' });
        }
        res.status(200).json(vendedores);
    },

    create (req, res) {
        let datos = req.body
        const datos_ingreso = { 
                dpi: datos.dpi,
                nombre: datos.nombre
        };
  
        Vendedor.create(datos_ingreso)
        .then(vendedores => {
            res.send(vendedores);
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({ error: 'Error al insertar' });
        });
      },
  
      update (req, res) {
        let datos = req.body
          Vendedor.update(
            { 
                dpi: datos.dpi,
                nombre: datos.nombre
            },
            { 
              where: { 
                id: datos.id 
              }
            }
          )
          .then(vendedores => res.status(200).send('El registro ha sido actualizado'))
          .catch(error => {
              console.log(error)
              return res.status(500).json({ error: 'Error al actualizar' });
          });
      },
};