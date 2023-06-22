const jwt = require('jsonwebtoken');
const query = require('./query')

//секретный ключ токена
const secretKey = 'cZ#tT{m$g2M+LB8&9b6m7{DnQR@fThyJ';



function helper(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decodedToken) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const res = decodedToken.email;
          resolve(res);
        }
      });
    });
  }
  
const jwtHelpers = {
    async  getUserRole(token) {
        try {
          const userEmail = await helper(token);
          console.log(userEmail);
          
          const sql = 'SELECT role_name FROM users LEFT JOIN roles ON roles.role_id = users.role_id WHERE email = ?';
          const res = await query(sql, [userEmail]);
          return res
          
          // Дополнительная обработка результата запроса
        //   console.log(res);
          
        } catch (error) {
          // Обработка ошибок
          console.log(error);
        }
      },
      async  getUserId(token) {
        try {
          const userEmail = await helper(token);
          
          const sql = 'SELECT user_id FROM users WHERE email = ?';
          const res = await query(sql, [userEmail]);
          return res
          
          // Дополнительная обработка результата запроса
        //   console.log(res);
          
        } catch (error) {
          // Обработка ошибок
          console.log(error);
        }
      }
}
  
module.exports = jwtHelpers
  