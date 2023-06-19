const express = require('express');
const lessonController = require('../controllers/LessonController');

const router = express.Router();

// Создание нового урока
router.post('/lessons/', lessonController.createLesson);

// Получение всех уроков
router.get('/lessons/', lessonController.getAllLessons);

// Получение урока по идентификатору
router.get('/lessons/:id', lessonController.getLessonById);

// Обновление урока
router.put('/lessons/:id', lessonController.updateLesson);

// Удаление урока
router.delete('/lessons/:id', lessonController.deleteLesson);

module.exports = router;
