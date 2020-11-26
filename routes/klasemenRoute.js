const route = require("express").Router();
const klasemenController = require("../controllers/klasemenController");
const authentication = require("../middlewares/authentication");

route.get("/klasemen", klasemenController.getKlasemen);
route.posts("/klasemen", klasemenController.getKlasemen);

module.exports = route;