const {Router} = require("express");
const {authenticated} = require("../middelwares/auth");

const router = new Router();

//@ desc Dashboard
//@ route GET/dashboard
router.get("/",authenticated,(req,res) => {
  res.render("dashboard", {
      pageTitle:"ورود به بخش مدیریت|داشبور",
      path :"/dashboard.ejs",
      fullname: req.user.fullname,
  });
});

module.exports = router;