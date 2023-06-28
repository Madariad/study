const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const query = require('../utils/query');
const jwtHelpers = require('../utils/jwt');

     

//секретный ключ токена
const secretKey = 'cZ#tT{m$g2M+LB8&9b6m7{DnQR@fThyJ';

   

const User = {
 async  register(user, callback) {
    try {
      const { email, username, password, role_name } = user;

    if (username.trim() === '' && password.trim() === '') {
        callback({
          status: 'error',
          message: 'Username and password are required',
          statusCode: 400,
        });
      }


          //проверка email на уникальность
          const checkUserSql = 'SELECT * FROM users WHERE email = ?';
          const existingUser = await query(checkUserSql, [email]);
      
          if (existingUser.length > 0) {
            callback(
              {
                status: 'erorr',
                message: 'Email already exists',
                statusCode: 409
              })
            return;
          }

          //проверка роля
          const sql = "SELECT role_id FROM roles WHERE role_name = ?"
          const result = await query(sql, [role_name]) 


    
              if (result.length === 0) {
                callback({
                  status: 'error',
                  message: 'No such role',
                  statusCode: 409
                });
                return
              } 

              const roleId = result[0].role_id;
              const hashedPassword = await bcrypt.hash(password, 10);


              const credentails = {
                    email: email,
                    username: username,
                    password: hashedPassword,
                    role_id: roleId,
                  }

              const credentailsQuery = 'INSERT INTO users SET ?';
              await query(credentailsQuery, [credentails])

              //получаем создынную пользавателя
              const getUserSql = 'SELECT * FROM users WHERE email = ?';
              const userId = await query(getUserSql, [email]);


              //создаем токен
              const token = jwt.sign({ email: email }, secretKey);

              const insertTokenSql = 'INSERT INTO tokens (user_id, token) VALUES (?, ?)';
              await query(insertTokenSql,[userId[0].user_id, token]);
              callback(
                {
                  status: 'success',
                  statusCode: 200,
                  message: 'regeneration completed successfully',
                  token: token, 
                })

    
     
    } catch (error) {
      console.log('Ошибка при разборе JSON:', error);
    } 
  },


async  login(credentails, callback) {
  
  try {
      const {email, password} = credentails;

  
      const getUserSql = 'SELECT * FROM users WHERE email = ?';
      const user = await query(getUserSql, [email]);
  
      if (user.length === 0) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }
  
      const passwordMatch = await bcrypt.compare(password, user[0].password);
  
      if (passwordMatch) {
        const token = jwt.sign({ email: user[0].email }, secretKey);

        const checkfortheexistenceofatoken = 'DELETE FROM tokens WHERE user_id = ?'

         await query(checkfortheexistenceofatoken, [user[0].user_id])


        const insertTokenSql = 'INSERT INTO tokens (token, user_id) VALUES (?, ?)';
        await query(insertTokenSql, [token, user[0].user_id]);
        
        callback(
          {
            status: 'success',
            message: 'login completed successfully',
            statusCode: 200,
            token: token
          })
      } else {

        callback(
          {
            status: 'error',
            message: 'Invalid credentials',
            statusCode: 401,
          })
      }
    } catch (error) {
      callback(
        {
          status: 'error',
          message: 'Failed to retrieve user',
          statusCode: 500,
        })
      console.error('Error retrieving user:', error);
    }
  },







  async  logout(token, callback) {
    try {





      const tokens = token.split('Bearer ')[1];


      // jwt.verify(tokens, secretKey, (err, decodedToken) => {
      //   if (err) {
      //     // console.log('JSDFVJBSLDJKBgvlSKJB');
      //     console.log(err);
          
      //   } else {
      //     console.log(7676598798);
          
      //     console.log(decodedToken);
      //     // const username = decodedToken.username;




          
      //   }
      // });
      
            //  const tyt = 'SELECT user_id, token FROM tokens WHERE token = ?'
            //  const rest =  await query(tyt, [tokens]);
            //  console.log(await rest);

            const removeTokenSql = 'DELETE FROM tokens WHERE token = ?';
            await query(removeTokenSql, [tokens]);





  
      callback({
        status: 'success',
        message: 'Logged out successfully', 
        statusCode: 201,
      });
    } catch (error) {
      console.error('Error during logout:', error);
      callback(
        {
          status: 'erorr',
          message: 'Failed to log out',
          statusCode: 500,
        })
    }
  },






  

  async getAll(callback) {
try {
      const getUsersquery = 'SELECT * FROM users';
    const users = await query(getUsersquery)
    callback(
      {
        status: 'success',
        message: 'get users success',
        users: users,
        statusCode: 200,
      });
} catch (error) {
  console.error('Error during logout:', error);
  callback(
    {
      status: 'erorr',
      message: 'Failed to get users',
      statusCode: 500,
    })
}
  

  },
 async getCourses(token, callback){
     try {
      const tokens = token.split('Bearer ')[1];
      const userId = await jwtHelpers.getUserId(tokens)

      const getCoursesSql = 'SELECT * FROM courses WHERE course_creator_id = ?';
      const result = await query(getCoursesSql, [userId[0].user_id])

      callback(
        {
          status: 'success',
          message: 'courses this user',
          corses: result,
          statusCode: 200,
        })
     } catch (error) {
      callback(
        {
          status: 'error',
          message: error,
          statusCode: 500,
        })
     }
     
 },
 async subscribeCourse(courseId, token, callback) {
  try {
    const tokens = token.split('Bearer ')[1];
    const userId = await jwtHelpers.getUserId(tokens);
    console.log(userId);

    const userSql = 'SELECT subscribed_courses FROM users WHERE user_id = ?';
    const subscribedSql = 'UPDATE users SET subscribed_courses = ? WHERE user_id = ?';

    const [userResult] = await query(userSql, [userId]);
    console.log(userResult[0]);
    const subscribedCourses = userResult[0].subscribed_courses;

    // Разбиваем текущий список подписанных курсов на массив чисел
    const subscribedCourseIds = !subscribedCourses === null ? subscribedCourses.split(',').map(Number) : [];
    console.log('dddddddddddddddddddddddddddddddddd');
    console.log(subscribedCourseIds);

    // Добавляем новый курс в список подписанных курсов, если его идентификатор еще не присутствует в списке
    if (!subscribedCourseIds.includes(courseId)) {  
      subscribedCourseIds.push(courseId);
    }

    // Обновляем базу данных с обновленным списком подписанных курсов
    await query(subscribedSql, [subscribedCourseIds.join(','), userId[0].user_id]);

    callback({
      status: 'success',
      message: 'subscribed',
      statusCode: 200,
    });
  } catch (error) {
    callback({
      status: 'error',
      message: error,
      statusCode: 500,
    });
  }
},

 async  getById(userId, callback) {
   try {
    const getByIdQuery = 'SELECT * FROM users WHERE user_id = ?';
    const userByid =  await query(getByIdQuery, [userId]);
    callback({
      status: 'success',
      message: 'get users by id success',
      user: userByid,
      statusCode: 200,
    })
   } catch (error) {
    console.error('Error during logout:', error);
  callback(
    {
      status: 'erorr',
      message: 'Failed to get users',
      statusCode: 500,
    })
   }
   
  },

  //в разработке не трогать
  //нужно добавить логику зброса пороля думаю проверка на подлиность должен до этой функций а именно в middleware

  //если пользователь меняеть email в током случае нужно удалить существуеший токен и создать новый на основе нового email и занова отправить на клиенит чтобы дальнейшим клент мог отправить активный токен в запросе

async  update(userId, updatedUser, callback) {
   const {email, username, password, role_name} = updatedUser;

  //  const getUserId = 'SELECT email FROM users WHERE user_id = ?'

  // const user =  await query(getUserId, userId)

  // if (user[0].email === ) {
    
  // }

//проверка роля
  const sql = "SELECT role_id FROM roles WHERE role_name = ?"
  const resul = await query(sql, [role_name]) 
  
  
      
  if (resul.length === 0) {
    callback({
      status: 'error',
      message: 'No such role',
      statusCode: 409
    });
    return
  } 
  
     const roleId = resul[0].role_id;

   const hashedPassword = await bcrypt.hash(password, 10);
   
   const updateUser = {
    email: email,
    username: username,
    password: hashedPassword,
    role_id: roleId
   }
    const updateQuery = 'UPDATE users SET ? WHERE user_id = ?';
    const result = await query(updateQuery, [updateUser, userId])
    callback(
      {
        status: 'success', 
        message: 'user updated',
        statusCode: 201,
      });
  },
async  delete(userId, callback) {
    try {
        const sql = 'SELECT token FROM tokens WHERE user_id = ?';
        const selectTokenSql = await query(sql, [userId])
        await query('DELETE FROM tokens WHERE token = ?', [selectTokenSql[0].token])
        const deleteQuery = 'DELETE FROM users WHERE user_id = ?';
        await query(deleteQuery, [userId])
        callback(
          {
            status: 'success',
            message: 'user delete',
            statusCode: 201
          })
    } catch (error) {
      callback(
        {
          status: 'error',
          message: error,
          statusCode: 500
        })
    }
}
}
module.exports = User;
