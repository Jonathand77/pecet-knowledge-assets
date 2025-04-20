const express = require('express');
const router = express.Router();
const activoController = require('../controllers/activoController');

// Obtener todos los activos
router.get('/activos', activoController.getAllActivos);

// Obtener un activo por ID
router.get('/activos/:id', activoController.getActivoById);

// Crear un nuevo activo
router.post('/activos', activoController.createActivo);

// Actualizar un activo
router.put('/activos/:id', activoController.updateActivo);

// Eliminar un activo
router.delete('/activos/:id', activoController.deleteActivo);

module.exports = router;
