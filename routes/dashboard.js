const {Router} = require("express");
const {authenticated} = require("../middelwares/auth");

const adminController = require("../controllers/adminController");

const router = new Router();

//@ desc Dashboard
//@ route GET/dashboard
router.get("/",authenticated,adminController.getDashboard);

//@ desc Dashboard Add Post
//@ route GET/dashboard/Add-Post
router.get("/add-post", authenticated, adminController.getAddPost);

//@ desc Dashboard Handle Post Creation
//@ route POST/dashboard/Add-Post
router.post("/add-post", authenticated, adminController.createPost);

module.exports = router;