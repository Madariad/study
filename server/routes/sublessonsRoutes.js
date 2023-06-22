const express = require('express');
const router = express.Router();

const sublessonsController = require('../controllers/SublessonsController')


// Получение подурока по идентификатору
router.get('/:id', sublessonsController.getSublessonsById);

module.exports = router