'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Cliente = db.clientes;
const Transaccion = db.transacciones;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");

module.exports = {
       registro (req, res) {
        let datos = req.body
        Cliente.findByPk(datos.id_cliente)
        .then(saldo => {
            if (!saldo) {
                return res.status(404).json({ error: 'Registro no encontrado' });
            }
            //console.log(saldo)
                const totalidad = datos.cantidad_vendida * datos.precio_galon;
                let cantidad = 0;
                if (saldo.puntos == 0) {
                    saldo.puntos = datos.cantidad_vendida / 5;
                    cantidad = totalidad;
                }else{
                    cantidad = totalidad - saldo.puntos;
                    saldo.puntos = 0;
                }
                const totalV = cantidad;
                const datos_ingreso = { 
                    cantidad_vendida: datos.cantidad_vendida,
                    precio_galon: datos.precio_galon,
                    fecha: datos.fecha,
                    id_cliente: datos.id_cliente,
                    id_vendedor: datos.id_vendedor,
                    total: totalV
                };
                Transaccion.create(datos_ingreso)
                .then(async transacciones => {
                    ///res.send(transacciones);
                    const options = {
                        'method': 'PUT',
                        'url': 'http://localhost:8081/gasolina/clientesUpdate',
                        'headers': {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            id: datos.id_cliente,
                            dpi: saldo.dpi,
                            nombre: saldo.nombre,
                            puntos: saldo.puntos
                        }
                    };
                    try {
                        const result = await axios(options);
                        const resultado = result.data;
                        res.status(200).send(resultado);
                    } catch (e) {
                        res.status(500).send("Error con el servidor");
                    }
                })
                .catch(error => {
                    console.log(error)
                    return res.status(500).json({ error: 'Error al insertar' });
                });
            })
        
    },
};
