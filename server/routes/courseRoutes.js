const express = require('express');
const courseController = require('../controllers/CourseController');

const router = express.Router();

// Создание курса
router.post('/create', courseController.createCourse);

// Получение всех курсов
router.get('/', courseController.getAllCourses);

// Получение курса по идентификатору
router.get('/:id', courseController.getCourseById);

// Обновление курса
router.put('/:id', courseController.updateCourse);

// Удаление курса
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
