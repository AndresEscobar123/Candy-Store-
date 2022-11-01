
const { Router } = require('express');
var controllerinventarios =require('../controllers/controllerinventarios');
var controllerclientes =require('../controllers/controllerclientes');
var controllerventas =require('../controllers/controllerventas');
var controllerentradas =require('../controllers/controllerentradas');
const router = Router();


router.post('/crear', controllerinventarios.saveInventario);
router.get('/buscar/:id', controllerinventarios.buscarData);
router.get('/buscar/:id?', controllerinventarios.listarAllData);
router.delete('/inventario/:id',controllerinventarios.deleteinventario); 
router.put('/inventario/:id',controllerinventarios.updateinventario);
router.post('/crearcliente',controllerclientes.saveclientes);
router.get('/buscarcliente/:id', controllerclientes.buscarData);
router.get('/buscarcliente/:id?', controllerclientes.listarAllData);
router.put('/actualizarcliente/:id',controllerclientes.updatecliente);
router.delete('/cliente/:id',controllerclientes.deletecliente); 
router.post('/crearventa', controllerventas.saveventa);
router.get('/buscarventa/:id', controllerventas.buscarData);
router.get('/buscarventa/:id?', controllerventas.listarAllData);
router.put('/actualizarventa/:id',controllerventas.updateventas);
router.delete('/venta/:id',controllerventas.deleteventas); 
router.post('/crearentrada',controllerentradas.saveentradas);
router.get('/buscarentrada/:id', controllerentradas.buscarData);
router.get('/buscarentrada/:id?', controllerentradas.listarAllData);
router.put('/actualizarentrada/:id',controllerentradas.updateentradas);
router.delete('/entrada/:id',controllerentradas.deleteentradas);

module.exports = router;