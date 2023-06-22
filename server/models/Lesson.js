const pool = require('../utils/db');
const query = require('../utils/query');
const jwtHelpers = require('../utils/jwt')

const Lesson = {
  async create(lesson, courseId, token, callback) {
    // const query = 'INSERT INTO Lessons SET ?';
    try {
      const getRole = await jwtHelpers.getUserRole(token);
         if (getRole[0].role_name === 'teachers') {
                const userId = await jwtHelpers.getUserId(token)
                console.log(userId[0].user_id);
      
              const InsertQuery = 'INSERT INTO Lessons SET ?';
      
              const newLesson = 
              {
                ...lesson,
                course_id: courseId
              }
              console.log(await query(InsertQuery, [newLesson]))
              callback(
                {
                  status: 'success',
                  message: 'created course',
                  statusCode: 201,
                });
                  
         }else {
          callback(
            {
              status: 'error',
              message: 'Only owner can create lessons.',
              statusCode: 401,
            });
         }
    } catch (error) {
      callback(
        {
          status: 'error',
          message: error,
          statusCode: 500,
        });
    }

    // pool.getConnection((err, connection) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }

    //   connection.query(query, lesson, (err, result) => {
    //     connection.release();
    //     if (err) throw err;
    //     callback(result);
    //   });
    // });
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
