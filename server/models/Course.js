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
  async getLessons(courseId, callback){
    try {
      console.log('ddddd');
      const getLessonsFromCourseSql = 'SELECT * FROM courses LEFT JOIN lessons ON lessons.course_id = courses.course_id WHERE courses.course_id = ?';
    const results = await query(getLessonsFromCourseSql, [courseId]);
    callback(
      {
        status: 'success',
        message: 'All lessons from this course',
        lessons: results,
        statusCode: 200,
      })
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
async  update(courseId, updatedCourse, token, callback) {
  
  try {
      const tokens = token.split('Bearer ')[1];
        const userData = await jwtHelpers.getUserData(tokens);


      const getCourse = 'SELECT course_creator_id FROM courses WHERE course_id = ?';
      const resul = await query(getCourse, [courseId])
                    
          if (resul.length === 0) {
            callback({
              status: 'error',
              message: 'No such corse',
              statusCode: 409
            });
            return
          } 
          if (resul[0].course_creator_id === userData[0].user_id) {
           
            const updateQuery = 'UPDATE Courses SET ? WHERE course_id = ?';
            await query(updateQuery, [updatedCourse, courseId])

            
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
async  delete(courseId, token, callback) {
    try {
      const tokens = token.split('Bearer ')[1];
      const userData = await jwtHelpers.getUserData(tokens);
      
      const getCourse = 'SELECT course_creator_id FROM courses WHERE course_id = ?';
      const resul = await query(getCourse, [courseId])
                    
          if (resul.length === 0) {
            callback({
              status: 'error',
              message: 'No such corse',
              statusCode: 409
            });
            return
          } 
          if (resul[0].course_creator_id === userData[0].user_id) {
            const deleteQuery = 'DELETE FROM Courses WHERE course_id = ?';


           const res =  await query(deleteQuery, [courseId])
           console.log(res);

            callback(
              {
                status: 'success',
                message: 'Course deleted successfully',
                statusCode: 201
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
};

module.exports = Course;
