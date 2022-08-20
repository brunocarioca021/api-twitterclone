const router = require("express").Router();
const usersController = require("../controller/users.controller");

router.get("/", usersController.findAllUsersController);
// router.get("/findByEmail", usersControlller.findByEmailUsersController);

router.post("/", usersController.createUsersController);

module.exports = router;
