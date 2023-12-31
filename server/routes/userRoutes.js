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

router.get('/get/data', UserController.userData)

// // Обновление пользователя
router.put('/:userId', UserController.update);


// // Удаление пользователя
router.delete('/:userId', UserController.delete);


router.get('/courses/all', UserController.getCourses)

router.post('/subscribed/:courseId', UserController.subscribeCourse)



router.get('/subscribed/:userId', UserController.getSubscribeCourse)

router.post('/chosen/:courseId', UserController.chosenCourse)

// router.get('/chosen/:courseId', UserController.chosenCourse)


router.post('/avatar/upload', imageConfig.users.config(), imageConfig.users.upload);

router.get('/avatar/:path', imageConfig.users.download);



module.exports = router;
