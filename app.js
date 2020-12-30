const path = require('path');

const express = require('express');

const app =  express();

const indexRoutes = require('./routes');

//* View Engine
app.set('view engine','ejs');
app.set('views','views');

//*Static folder
app.use(express.static(path.join(__dirname,"public")));

//*Routes
app.use(indexRoutes);

app.listen(3000,() => console.log("server runinng"));