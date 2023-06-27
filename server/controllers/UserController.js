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
  logout(req, res){

    const token = req.headers.authorization;
  



    User.logout(token, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json({status: result.status, message: result.message})
          
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
    User.getAll((result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json({status: result.status, message: result.message, users: result.users})
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    });
  },
  getCourses(req, res){
    const token = req.headers.authorization;
    User.getCourses(token, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json({status: result.status, message: result.message, corses: result.corses})
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    }) 
  },
  getById(req, res) {
    const userId = req.params.userId;

    User.getById(userId, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json({status: result.status, message: result.message, user: result.user})
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    });
  },
  update(req, res) {
    const userId = req.params.userId;
    const updatedUser = req.body;

    User.update(userId, updatedUser, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json({status: result.status, message: result.message})
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    });
  },
  delete(req, res) {
    const userId = req.params.userId;

    User.delete(userId, (result) => {
      if (result.status === 'success') {
        res.status(result.statusCode)
        res.json({status: result.status, message: result.message})
          
      }else {
          res.status(result.statusCode)
          res.json(
            {status: result.status, 
             message: result.message
            })
      }
    });
  },
};

module.exports =  UserController;
