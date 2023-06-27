const express = require('express');
const router = express.Router();
const  UserController = require('../controllers/UserController');
const imageConfig = require('../utils/multer');


//middleware
// const authenticateToken = require('../middleware/authenticateToken')


// router.use(authenticateToken)
//регестрация
router.post('/register', UserController.register);

//вход
router.post('/login', UserController.login);

//выход
router.post('/logout', UserController.logout);


// Получение всех пользователей
router.get('/', UserController.getAll);


// // Получение пользователя по ID
router.get('/:userId', UserController.getById);

// // Обновление пользователя
router.put('/:userId', UserController.update);


// // Удаление пользователя
router.delete('/:userId', UserController.delete);


router.get('/courses/all', UserController.getCourses)

router.post('/subscribed/:courseId', UserController.subscribeCourse)

router.post('/avatar/upload', imageConfig.users.config(), imageConfig.users.upload);

router.get('/avatar/:path', imageConfig.users.download);

module.exports = router;
