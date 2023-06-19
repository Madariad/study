const pool = require('../utils/db');

const Course = {
  create(course, callback) {
    const query = 'INSERT INTO Courses SET ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, course, (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  getAll(callback) {
    const query = 'SELECT * FROM Courses';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, (err, results) => {
        connection.release();
        if (err) throw err;
        callback(results);
      });
    });
  },
  getById(courseId, callback) {
    const query = 'SELECT * FROM Courses WHERE course_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [courseId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  update(courseId, updatedCourse, callback) {
    const query = 'UPDATE Courses SET ? WHERE course_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [updatedCourse, courseId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  delete(courseId, callback) {
    const query = 'DELETE FROM Courses WHERE course_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [courseId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
};

module.exports = Course;
