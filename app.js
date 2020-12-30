const path = require('path');

const express = require('express');
const dotenv =  require('Dotenv');

const app =  express();

const indexRoutes = require('./routes');

//* Load Config
dotenv.config({path : "./config/config.env"});

//* View Engine
app.set('view engine','ejs');
app.set('views','views');

//*Static folder
app.use(express.static(path.join(__dirname,"public")));

//*Routes
app.use(indexRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`server runinng on ${process.env.NODE_ENV} port ${PORT}`));