const express = require('express');
const courseController = require('../controllers/CourseController');
const  UserController = require('../controllers/UserController');
const imageConfig = require('../utils/multer');

const router = express.Router();

// Создание курса
router.post('/create', courseController.createCourse);

// Получение всех курсов
router.get('/', courseController.getAllCourses);

// Получение всех уроков у курса
router.get('/:courseId/lessons', courseController.getLessonsFromCourse);

// Получение курса по идентификатору
router.get('/:id', courseController.getCourseById);

// Обновление курса
router.put('/:id', courseController.updateCourse);

// Удаление курса
router.delete('/:id', courseController.deleteCourse);



router.post('/:courseId/upload', imageConfig.course.config(), imageConfig.course.upload);

router.get('/courseId/download', imageConfig.course.download);

module.exports = router;
