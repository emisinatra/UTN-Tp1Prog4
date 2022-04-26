var express = require('express');
var router = express.Router();
const empleadosController = require("../controllers/empleadosController")

/* GET home page. */
router.get('/',empleadosController.index);
router.get('/crear',empleadosController.crear);
router.post("/",empleadosController.guardar);
router.post('/eliminar/:legajo',empleadosController.eliminar);
router.post('/editar/:legajo',empleadosController.editar);
router.post("/actualizar",empleadosController.actualizar);

module.exports = router;