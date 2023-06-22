const Course = require('../models/Course');

const courseController = {
  createCourse(req, res) {
    const course = req.body;
    const token = req.headers.authorization;
    const tokens = token.split('Bearer ')[1];

    Course.create(course, tokens, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json({status: result.status, message: result.message})
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    });
  },
  getLessonsFromCourse(req, res){
    const courseId = req.params.courseId;
      Course.getLessons(courseId, (results) => {
        if (results.status === 'success') {
          res.status(results.statusCode)
          res.json({status: results.status, 
            message: results.message,
            lessons: results.lessons
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
  getAllCourses(req, res) {
    Course.getAll((results) => {
      if (results.status === 'success') {
        res.status(results.statusCode)
        res.json({status: results.status, 
          message: results.message,
         courses: results.courses
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
  getCourseById(req, res) {
    const courseId = req.params.id;

    Course.getById(courseId, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json(
        {
         status: result.status, 
         message: result.message,
         course: result.course
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
  updateCourse(req, res) {
    const courseId = req.params.id;
    const updatedCourse = req.body;
    const token = req.headers.authorization;

    Course.update(courseId, updatedCourse,token, (result) => {
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
  deleteCourse(req, res) {
    const courseId = req.params.id;
    const token = req.headers.authorization;

    Course.delete(courseId, token, (result) => {
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

module.exports = courseController;
