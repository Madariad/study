const pool = require('../utils/db');
const query = require('../utils/query');

const Lesson = {
  create(lesson, callback) {
    const query = 'INSERT INTO Lessons SET ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, lesson, (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  getAll(callback) {
    const query = 'SELECT * FROM Lessons';

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
  getById(lessonId, callback) {
    const query = 'SELECT * FROM Lessons WHERE lesson_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [lessonId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  update(lessonId, updatedLesson, callback) {
    const query = 'UPDATE Lessons SET ? WHERE lesson_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [updatedLesson, lessonId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  delete(lessonId, callback) {
    const query = 'DELETE FROM Lessons WHERE lesson_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [lessonId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
};

module.exports = Lesson;
