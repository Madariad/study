const pool = require('../utils/db');

const jwtHelpers = require('../utils/jwt')

const query = require('../utils/query')


const Course = {
 async  create(course, token,  callback) {
   try {
      const getRole = await jwtHelpers.getUserRole(token);
         if (getRole[0].role_name === 'teachers') {
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
                  
         }else {
          callback(
            {
              status: 'error',
              message: 'Only teachers can create courses.',
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
    
  },
async  getAll(callback) {
   try {
    const coursesAllQuery = 'SELECT * FROM Courses';
    const coursesAll =  await query(coursesAllQuery);
    callback(
      {
        status: 'success',
        message: 'get courses success',
        courses: coursesAll,
        statusCode: 200,
      })
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
async  getById(courseId, callback) {
    try {
      const courseGetquery = 'SELECT * FROM Courses WHERE course_id = ?';
    const courseGet = await query(courseGetquery, courseId);
    callback(
      {
        status: 'success',
        message: 'get by courses success',
        course: courseGet,
        statusCode: 200,
      })
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
async  update(courseId, updatedCourse, callback) {
    try {
      const updateQuery = 'UPDATE Courses SET ? WHERE course_id = ?';
      await query(updateQuery, [updatedCourse, courseId])
      console.log();
      callback(
        {
          status: 'success',
          message: 'course updated',
          statusCode: 201,
        })
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
