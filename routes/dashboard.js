const {Router} = require("express");

const router = new Router();

//@ desc Dashboard
//@ route GET/dashboard
router.get("/",(req,res) => {
  res.render("dashboard", {
      pageTitle:"ورود به بخش مدیریت|داشبور",
      path :"/dashboard.ejs"});
});

module.exports = router;