const path = require("path");

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const dotEnv = require("dotenv");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");


const connectDB = require("./config/db");

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();

const app = express();

//* Logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

//* View Engine
app.use(expressLayout); 
app.set("view engine", "ejs");
app.set("layout","./layouts/mainlayouts");  
app.set("views", "views");

//* Body Paser
app.use(express.urlencoded({ extended:false }));

//* Session
app.use(session({
  secret:"secret",
  cookie:{maxAge:60000},
  resave:false,
  saveUninitialized:false,
})
);

//* Flash
app.use(flash()); //req.flash

//* Static Folder
app.use(express.static(path.join(__dirname, "public"))); 

//* Routes
app.use("/",require('./routes/blog'));
app.use("/users",require('./routes/users'));
app.use("/dashboard",require('./routes/dashboard'));

//* 404 pages
app.use((req,res) => {
    res.render("404",{pageTitle:"404|صفحه ی مورد نظر پیدا نشد.",path:"/404"});
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
