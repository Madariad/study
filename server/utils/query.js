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
module.exports = query