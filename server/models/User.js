const pool = require('../utils/db');

const User = {
  create(user, callback) {
    const query = 'INSERT INTO users SET ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, user, (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  getAll(callback) {
    const query = 'SELECT * FROM users';

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
  getById(userId, callback) {
    const query = 'SELECT * FROM users WHERE user_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [userId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  update(userId, updatedUser, callback) {
    const query = 'UPDATE users SET ? WHERE user_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [updatedUser, userId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
  delete(userId, callback) {
    const query = 'DELETE FROM users WHERE user_id = ?';

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return;
      }

      connection.query(query, [userId], (err, result) => {
        connection.release();
        if (err) throw err;
        callback(result);
      });
    });
  },
};

module.exports = User;
