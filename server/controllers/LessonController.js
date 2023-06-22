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
  getSublessonsInLesson(req, res){
    const lessonId = req.params.lessonId
    Lesson.getSublessons(lessonId, (results) => {
      if (results.status === 'success') {
        res.status(results.statusCode)
        res.json({status: results.status, 
          message: results.message,
          sublessons: results.sublessons
        })
          
      }else {
          res.status(results.statusCode)
          res.json(
            {status: results.status, 
             message: results.message
            })
      }
    })
  },

  getAllLessons(req, res) {
    Lesson.getAll((results) => {
      if (results.status === 'success') {
        res.status(results.statusCode)
        res.json(
        {
         status: results.status, 
         message: results.message,
         lessons: results.lessons,
        })
          
      }else {
          res.status(results.statusCode)
          res.json(
            {status: results.status, 
             message: results.message
            })
      }
    });
  },

  getLessonById(req, res) {
    const lessonId = req.params.id;

    Lesson.getById(lessonId, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json(
        {
         status: result.status, 
         message: result.message,
         lesson: result.lesson,
        })
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    });
  },

  updateLesson(req, res) {
    const lessonId = req.params.id;
    const updatedLesson = req.body;
    const token = req.headers.authorization;

    Lesson.update(lessonId, updatedLesson, token, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json(
        {
         status: result.status, 
         message: result.message,
        })
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    });
  },

  deleteLesson(req, res) {
    const lessonId = req.params.id;

    Lesson.delete(lessonId, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json(
        {
         status: result.status, 
         message: result.message,
        })
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    });
  },
};

module.exports = lessonController;
