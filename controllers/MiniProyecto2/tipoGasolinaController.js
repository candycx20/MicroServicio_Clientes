'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Tipo_gasolina = db.tipo_gasolinas;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");

module.exports = {
    find (req, res) {
        return Tipo_gasolina.findAll() 
        .then(tipo_gasolinas => res.status(200).send(tipo_gasolinas))
        .catch(error => res.status(400).send(error))
    },

    async findById (req, res) {
      console.log(req.params.id)
      let id = req.params.id;
      const tipo_gasolinas = await Tipo_gasolina.findByPk(id);
        if (!tipo_gasolinas) {
          return res.status(404).json({ error: 'Dato no encontrado' });
        }
        res.status(200).json(tipo_gasolinas);
    },

    create (req, res) {
        let datos = req.body
        const datos_ingreso = { 
                nombre: datos.nombre
        };
  
        Tipo_gasolina.create(datos_ingreso)
        .then(tipo_gasolinas => {
            res.send(tipo_gasolinas);
        })
        .catch(error => {
            console.log(error)
            return res.status(500).json({ error: 'Error al insertar' });
        });
      },
  
      update (req, res) {
        let datos = req.body
          Tipo_gasolina.update(
            { 
                nombre: datos.nombre
            },
            { 
              where: { 
                id: datos.id 
              }
            }
          )
          .then(tipo_gasolinas => res.status(200).send('El registro ha sido actualizado'))
          .catch(error => {
              console.log(error)
              return res.status(500).json({ error: 'Error al actualizar' });
          });
      },
};