const pool = require('../utils/db');

const jwtHelpers = require('../utils/jwt')

function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, values, (error, results) => {
        connection.release(); 

        if (error) {
          reject(error);
          return;
        }

        resolve(results);
      });
    });
  });
}


const Course = {
 async  create(course, token,  callback) {
   try {
      const getRole = await jwtHelpers.getUserRole(token);
         if (getRole[0].role_name === 'teachers') {
            console.log('success');
         }else {
          callback(
            {
              status: 'error',
              message: 'Only teachers can create courses.',
              statusCode: 401,
            });
         }
          const userId = await jwtHelpers.getUserId(token)
         console.log(userId[0].user_id);

        const InsertQuery = 'INSERT INTO Courses SET ?';

        const newCourse = 
        {
          ...course,
          course_creator_id: userId[0].user_id

        }
        await query(InsertQuery, [newCourse])
        callback(
          {
            status: 'success',
            message: 'created course',
            statusCode: 201,
          });
    } catch (error) {
      callback(
        {
          status: 'error',
          message: error,
          statusCode: 500,
        });
    }
    
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
