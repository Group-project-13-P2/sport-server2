const route = require("express").Router();
const userController = require("../controllers/userController");
const klasemenController = require("../controllers/klasemenController");
const covidController = require("../controllers/covidController");
const highlightController = require("../controllers/highlightController");
const authentication = require("../middlewares/authentication");
const jadwalPertandinganRoutes = require('./jadwalPertandinganRoutes');

route.use('/jadwal', jadwalPertandinganRoutes)
route.post("/register", userController.register);
route.post("/login", userController.login);
route.post("/glogin", userController.googleLogin);

route.get("/klasemen", klasemenController.getKlasemen);
route.get("/covidreport", covidController.getCovidData);
route.get("/covidreportbyday", covidController.getCovidDataByDay);
route.get("/highlights", highlightController.getHighlight);
route.use(authentication);

module.exports = route;