// const usersService = require()

const createUsersController = async (req, res) => {
  res.send({ message: "Create ok"});
};

const findAllUsersController = async (req, res) => {
  res.send({ messege: "Find All ok"});
};

module.exports = { createUsersController, findAllUsersController };
