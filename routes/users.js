const { Router } = require("express");
const Yup = require("yup");

const router = new Router();

const schema = Yup.object().shape({
    fullname: Yup.string()
        .required("نام و نام خانوادگی الزامی می باشد")
        .min(4)
        .max(255),
    email: Yup.string().email("ایمیل معتبر نمی باشد").required(),
    password: Yup.string().min(4).max(255).required(),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null]),
});

//  @desc   Login Page
//  @route  GET /users/login
router.get("/login", (req, res) => {
    res.render("login", { pageTitle: "ورود به بخش مدیریت", path: "/login" });
});

//  @desc   Register Page
//  @route  GET /users/register
router.get("/register", (req, res) => {
    res.render("register", {
        pageTitle: "ثبت نام کاربر جدید",
        path: "/register",
    });
});

//  @desc   Register Handle
//  @route  POST /users/register
router.post("/register", (req, res) => {
    schema
        .validate(req.body)
        .then((result) => {
            console.log(result);
            res.send("All Good");
        })
        .catch((err) => {
            console.log(err);
            res.send("Error", { errors: err.errors });
        });
});

module.exports = router;
