const Course = require('../models/course');

const courseController = {
  createCourse(req, res) {
    const course = req.body;

    Course.create(course, (result) => {
      res.status(200).json(result);
    });
  },
  getAllCourses(req, res) {
    Course.getAll((results) => {
      res.status(200).json(results);
    });
  },
  getCourseById(req, res) {
    const courseId = req.params.id;

    Course.getById(courseId, (result) => {
      if (result.length === 0) {
        res.status(404).json({ error: 'Course not found' });
      } else {
        res.status(200).json(result[0]);
      }
    });
  },
  updateCourse(req, res) {
    const courseId = req.params.id;
    const updatedCourse = req.body;

    Course.update(courseId, updatedCourse, (result) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Course not found' });
      } else {
        res.status(200).json({ message: 'Course updated successfully' });
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
