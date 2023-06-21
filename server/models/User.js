const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../utils/db');

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
    const getUsersquery = 'SELECT * FROM users';
    const result = await query(getUsersquery)
    callback(result);
  

  },
 async  getById(userId, callback) {
    const getByIdQuery = 'SELECT * FROM users WHERE user_id = ?';
    const result =  await query(getByIdQuery, [userId]);
    callback(result)
   
  },

  //в разработке не трогать
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
    callback(result);
  },
async  delete(userId, callback) {
    const deleteQuery = 'DELETE FROM users WHERE user_id = ?';
    const result = await query(deleteQuery, [userId])
    callback(result);
}
}
module.exports = User;
