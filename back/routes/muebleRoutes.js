const express = require ('express');
const router = express.Router();
const muebleController = require ('../controllers/muebleControllers');

router.post('/', muebleController.createMueble);

module.exports = router; 