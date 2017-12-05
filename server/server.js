var express = require('express');
var bodyParser = require('body-parser');
var{ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');

//const path = require('path');
//const http = require('http');
//const socketIO = require('socket.io');
var app = express();

//const publicPath = path.join(__dirname, '../public' );
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/users', (req, res)=>{
    var user = new User({
        email: 'something'
     });
    
    user.save().then((doc)=>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

//app.use(express.static(publicPath));

//var server = http.createServer(app);
//var io = socketIO(server);


//io.on('connection', (socket)=>{
//    console.log('New user connected');
//});

app.listen(port, ()=>{
    console.log(`Started up at ${port}`)
});

//module.exports{app};


