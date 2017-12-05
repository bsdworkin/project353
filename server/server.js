var express = require('express');
var bodyParser = require('body-parser');
var{ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');


var app = express();

//const publicPath = path.join(__dirname, '../public' );
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.listen(port, ()=>{
    console.log(`Started up at ${port}`)
});

module.exports{app};


