const {Router} = require("express");

const router = new Router();

//@ desc Login page
//@ route GET/users/login
router.get("/login",(req,res) => {
    res.render("login",{
        pageTitle:"ورود به بخش مدیریت" ,
        path :"/login"});
});

//@ desc Login page
//@ route GET/users/register
router.get("/register",(req,res) => {
    res.render("register",{
        pageTitle:"ثبت نام کاربر جدید" ,
        path :"/register"});
});

//@ desc Login Handle
//@ route POST/users/register
router.post("/register",(req,res) => {
    console.log(req.body);
    res.send("Weblog");
});

module.exports = router;