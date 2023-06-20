const User = require('../models/User');

// const User = new user();

const UserController = {
  register(req, res) {
    const user = req.body;

    User.register(user, (result) => {
        if (result.status === 'success') {
          const op = result.token ? [{status: result.status, message: result.message, token: result.token}] : [{status: result.status, message: result.message}]
          res.status(result.statusCode)
          res.json(op)
            
        }else {
            res.status(result.statusCode)
            res.json(
              {status: result.status, 
               message: result.message
              })
        }
    });
  },
  login(req, res){
    const user = req.body;


    User.login(user, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json({status: result.status, message: result.message, token: result.token})
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
  });

  },

  getAll(req, res) {
    User.getAll((users) => {
      res.json(users);
    });
  },
  getById(req, res) {
    const userId = req.params.userId;

    User.getById(userId, (user) => {
      res.json(user);
    });
  },
  update(req, res) {
    const userId = req.params.userId;
    const updatedUser = req.body;

    User.update(userId, updatedUser, (result) => {
      res.json(result);
    });
  },
  delete(req, res) {
    const userId = req.params.userId;

    User.delete(userId, (result) => {
      res.json(result);
    });
  },
};

// module.exports  = {UserController}
module.exports =  UserController;
