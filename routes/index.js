const { Router } = require('express');
const router = Router();

// facturas
const zapatoController = require('../controllers/cuenta/zapatoController');
const externoController = require('../controllers/cuenta/externoController');
const clienteController = require('../controllers/MiniProyecto2/clienteController');
const vendedorController = require('../controllers/MiniProyecto2/vendedorController');
const tipoGasolinaController = require('../controllers/MiniProyecto2/tipoGasolinaController');
const tipoPagoController = require('../controllers/MiniProyecto2/tipoPagoController');
const tanqueController = require('../controllers/MiniProyecto2/tanqueController');
const transaccionController = require('../controllers/MiniProyecto2/transaccionController');
const puntosController = require('../controllers/MicroServicioClientes/puntosController');
//RUTAS

module.exports = (app) => {
    //facturas
    router.get('/externo/factura', externoController.find);
    router.post('/externo/create', externoController.create);
    //router.get('/parcial1/find', parcial1Controller.find);

    
    router.get('/externo/zapatos', zapatoController.find);
    router.get('/externo/zapatoId', zapatoController.findById);


    router.get('/cliente/find', clienteController.find);
    router.get('/cliente/findById/:id', clienteController.findById);
    router.post('/cliente/create', clienteController.create);
    router.put('/cliente/update', clienteController.update);

    router.get('/vendedor/find', vendedorController.find);
    router.get('/vendedor/findById/:id', vendedorController.findById);
    router.post('/vendedor/create', vendedorController.create);
    router.put('/vendedor/update', vendedorController.update);

    router.get('/tipoGasolina/find', tipoGasolinaController.find);
    router.get('/tipoGasolina/findById/:id', tipoGasolinaController.findById);
    router.post('/tipoGasolina/create', tipoGasolinaController.create);
    router.put('/tipoGasolina/update', tipoGasolinaController.update);

    router.get('/tipoPago/find', tipoPagoController.find);
    router.get('/tipoPago/findById/:id', tipoPagoController.findById);
    router.post('/tipoPago/create', tipoPagoController.create);
    router.put('/tipoPago/update', tipoPagoController.update);

    router.get('/tanque/find', tanqueController.find);
    router.get('/tanque/findById/:id', tanqueController.findById);
    router.post('/tanque/create', tanqueController.create);
    router.put('/tanque/update', tanqueController.update);

    router.get('/transaccion/find', transaccionController.find);
    router.get('/transaccion/findById/:id', transaccionController.findById);
    router.post('/transaccion/create', transaccionController.create);
    router.put('/transaccion/update', transaccionController.update);


    //MICROSERVICIOS

    router.post('/puntos/registro', puntosController.registro);

    app.use('/', router);

};