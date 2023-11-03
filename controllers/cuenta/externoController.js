'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const moment = require('moment');
const axios = require('axios')

module.exports = {
  async find (req, res) {
    const options = {
        'method': 'GET',
        'url': 'http://localhost:3000/factura/find',
        'headers': {
          'Content-Type': 'application/json'
        }
    };
    
    try {
        const result = await axios(options);
        console.log(result)
        if (result.data) {
            const resultado = result.data
            const mensaje = "Los objetos encontrados son " + JSON.stringify(resultado)
            res.status(200).send(mensaje)
        }
        res.status(404).send("No se encontraron registros")
    } catch (e) {
        console.log(e);
    }
  
  },




async create(req, res){
    const body = req.body;

    await DatosVentas.create(body)


    const options = {
        'method': 'POST',
        'url': 'http://localhost:3000/factura/create',
        'headers': {
          'Content-Type': 'application/json'
        },
        data: {
            enviar_objeto: body
        }
      };

      try {
        const result = await axios(options);
        res.send('Comunicacion correcta')
        console.log('Comunicacion correcta')
      } catch (e) {
           console.log(e);
      }
    }
 }
