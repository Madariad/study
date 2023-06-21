const express = require('express');
const lessonController = require('../controllers/LessonController');

const router = express.Router();

// Создание нового урока
router.post('/', lessonController.createLesson);

// Получение всех уроков
router.get('/', lessonController.getAllLessons);

// Получение урока по идентификатору
router.get('/:id', lessonController.getLessonById);

// Обновление урока
router.put('/:id', lessonController.updateLesson);

// Удаление урока
router.delete('/:id', lessonController.deleteLesson);

module.exports = router;
