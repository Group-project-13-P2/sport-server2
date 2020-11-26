const route = require("express").Router();
const klasemenController = require("../controllers/klasemenController");

route.get("/klasemen", klasemenController.getKlasemen);
route.posts("/klasemen", klasemenController.getKlasemen);

module.exports = route;