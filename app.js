const express =require("express");
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

// DB config
const db = require('./config/keys').MongoURI;


//mongoo connect

mongoose.connect(db, {useNewUrlParser : true})
.then(()=> console.log('Mongo Connect...'))
.catch(err => console.log(err));

//ejs
app.use(expressLayout);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded( {extended: false}));


//routes

app.use('/', require('./controllers/index'));
app.use('/users', require('./controllers/users'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started port ${PORT}`));
