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

    Course.update(courseId, updatedCourse, (result) => {
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

    Course.delete(courseId, (result) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Course not found' });
      } else {
        res.status(200).json({ message: 'Course deleted successfully' });
      }
    });
  },
};

module.exports = courseController;
