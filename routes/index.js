const route = require("express").Router();
const userController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");

route.post("/register", userController.register);
route.post("/login", userController.login);
route.use(authentication);

module.exports = route;