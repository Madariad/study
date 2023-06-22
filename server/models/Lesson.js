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
                
                // доработать проверку на автора
              // const getLesson = 'SELECT course_creator_id FROM lessons LEFT JOIN courses ON courses.course_id = lessons.course_id WHERE lesson_id = ?'
              // const resul = await query(getLesson, [])
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
              message: 'Only teacher can create lessons.',
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
  async  update(lessonId, updatedLesson, token, callback) {
  
    try {
        const tokens = token.split('Bearer ')[1];
        const userData = await jwtHelpers.getUserData(tokens);
  
        const getLesson = 'SELECT course_creator_id FROM lessons LEFT JOIN courses ON courses.course_id = lessons.course_id WHERE lesson_id = ?';
        const resul = await query(getLesson, [lessonId])
                      
            if (resul.length === 0) {
              callback({
                status: 'error',
                message: 'No such corse',
                statusCode: 409
              });
              return
            } 
            if (resul[0].course_creator_id === userData[0].course_creator_id) {
             
              const updateQuery = 'UPDATE lessons SET ? WHERE lesson_id = ?';
              await query(updateQuery, [updatedLesson, lessonId])
  
              
                    callback(
                      {
                        status: 'success',
                        message: 'course updated',
                        statusCode: 201,
                      })
            }else {
              callback(
                {
                  status: 'erorr',
                  message: 'course updated only author',
                  statusCode: 401,
                })
            }
      } catch (error) {
        console.log(error);
        callback(
          {
            status: 'error',
            message: error,
            statusCode: 500,
          });
      }
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
