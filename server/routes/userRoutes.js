const express = require('express');
const router = express.Router();
const  UserController = require('../controllers/UserController');


//регестрация
router.post('/', UserController.register);

//вход
router.post('/login', UserController.login);


// Получение всех пользователей
router.get('/', UserController.getAll);


// // Получение пользователя по ID
router.get('/:userId', UserController.getById);

// // Обновление пользователя
router.put('/:userId', UserController.update);


// // Удаление пользователя
router.delete('/:userId', UserController.delete);

module.exports = router;
