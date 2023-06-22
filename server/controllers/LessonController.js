const Lesson = require('../models/Lesson');

const lessonController = {
  createLesson(req, res) {
    const lesson = req.body;
    const courseId = req.body.course_id
    console.log(lesson)
    const token = req.headers.authorization
    const tokens = token.split('Bearer ')[1];

    Lesson.create(lesson, courseId, tokens, (result) => {
      res.json(result);
    });
  },

  getAllLessons(req, res) {
    Lesson.getAll((results) => {
      res.json(results);
    });
  },

  getLessonById(req, res) {
    const lessonId = req.params.id;

    Lesson.getById(lessonId, (result) => {
      if (result.length === 0) {
        res.status(404).json({ message: 'Lesson not found' });
      } else {
        res.json(result[0]);
      }
    });
  },

  updateLesson(req, res) {
    const lessonId = req.params.id;
    const updatedLesson = req.body;

    Lesson.update(lessonId, updatedLesson, (result) => {
      res.json(result);
    });
  },

  deleteLesson(req, res) {
    const lessonId = req.params.id;

    Lesson.delete(lessonId, (result) => {
      res.json(result);
    });
  },
};

module.exports = lessonController;
