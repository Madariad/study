const express = require('express');
const courseController = require('../controllers/CourseController');

const router = express.Router();

// Создание курса
router.post('/courses', courseController.createCourse);

// Получение всех курсов
router.get('/courses', courseController.getAllCourses);

// Получение курса по идентификатору
router.get('/courses/:id', courseController.getCourseById);

// Обновление курса
router.put('/courses/:id', courseController.updateCourse);

// Удаление курса
router.delete('/courses/:id', courseController.deleteCourse);

module.exports = router;
