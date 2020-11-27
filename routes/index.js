const route = require("express").Router();
const userController = require("../controllers/userController");
const klasemenController = require("../controllers/klasemenController");
const highlightController = require("../controllers/highlightController");
const authentication = require("../middlewares/authentication");

route.post("/register", userController.register);
route.post("/login", userController.login);
route.get("/klasemen", klasemenController.getKlasemen);
route.get("/highlights", highlightController.getHighlight);
route.use(authentication);

module.exports = route;