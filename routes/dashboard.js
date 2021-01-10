const {Router} = require("express");
const {authenticated} = require("../middelwares/auth");

const admicController = require("../controllers/adminController");

const router = new Router();

//@ desc Dashboard
//@ route GET/dashboard
router.get("/",authenticated,admicController.getDashboard);

module.exports = router;