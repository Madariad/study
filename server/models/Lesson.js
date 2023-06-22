const pool = require('../utils/db');
const query = require('../utils/query');
const jwtHelpers = require('../utils/jwt')

const Lesson = {
  async create(lesson, courseId, token, callback) {
    // const query = 'INSERT INTO Lessons SET ?';
    try {
      const getRole = await jwtHelpers.getUserRole(token);
         if (getRole[0].role_name === 'teachers') {


                
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

  },
async  getSublessons(lessonId, callback){
  try {
    const getSublessonsSql = 'SELECT * FROM lessons LEFT JOIN sublessons ON sublessons.lesson_id = lessons.lesson_id WHERE lessons.lesson_id = ?';

    const results = await query(getSublessonsSql, [lessonId])

    callback(
      {
        status: 'success',
        message: 'All sublessons from this lesson',
        sublessons: results,
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
    const getAllQuery = 'SELECT * FROM Lessons';
    const results = await query(getAllQuery)
    callback(
      {
        status: 'success',
        message: 'get by lesson success',
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
async  getById(lessonId, callback) {
    try {
      const getByIdquery = 'SELECT * FROM Lessons WHERE lesson_id = ?';
    const results = await query(getByIdquery, [lessonId])
    callback(
      {
        status: 'success',
        message: 'get by lesson success',
        lesson: results,
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
  async  update(lessonId, updatedLesson, token, callback) {
  
    try {
        const tokens = token.split('Bearer ')[1];
        const userData = await jwtHelpers.getUserData(tokens);
  
        const getLesson = 'SELECT course_creator_id FROM lessons LEFT JOIN courses ON courses.course_id = lessons.course_id WHERE lesson_id = ?';
        const resul = await query(getLesson, [lessonId])
                      
            if (resul.length === 0) {
              callback({
                status: 'error',
                message: 'No such lesson',
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
async  delete(lessonId, callback) {
    try {
      const deleteQuery = 'DELETE FROM Lessons WHERE lesson_id = ?';
    await query(deleteQuery, [lessonId])
    callback(
      {
        status: 'success',
        message: 'lesson deleted successfully',
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
};

module.exports = Lesson;
