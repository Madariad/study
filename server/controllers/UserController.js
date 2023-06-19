const User = require('../models/User');

// const User = new user();

const UserController = {
  create(req, res) {
    const user = req.body;

    User.create(user, (result) => {
        if (result) {
            res.json({status: 'succes'});
            
        }else {
            console.log('llll');
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
