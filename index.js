const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./src/database/config');
const { connections } = require('mongoose');
require('dotenv').config();

// Create express server/application
const app = express();

// DataBase
dbConnection();


// Public directory
app.use( express.static('public') );

// CORS
app.use( cors() );

// Sent and receive json format
app.use( express.json() );
const serverHttp = require('http').Server(app);
const io = require("socket.io")(serverHttp, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });

var conections = {};

io.on('connection', function(socket){
    socket.on('send-message', function(data){
        socket.broadcast.emit('text-event', 'Hola ' + data.receiver + ' soy ' + data.sender);
    })
    socket.on('send-idConnection', function(data){
        conections[data] = socket;
        console.log(Object.keys(conections).length);
        socket.emit('connection-event', Object.keys(conections).length);
    })
    socket.on('disconnect', () =>{;

        for (var k in conections){
             if(conections[k] == socket){
                delete conections[k];
            }
        }
        console.log(Object.keys(conections).length);
    })
})




// Routes
app.use( '/api/auth', require('./src/routers/auth.router') );
app.use( '/api/event', require('./src/routers/event.router') );
app.use( '/api/establishment', require('./src/routers/establishment.router') );
app.use( '/api/rating', require('./src/routers/rating.router') );
app.use( '/api/post', require('./src/routers/post.router') );
app.use( '/api/channel', require('./src/routers/channel.router') );
app.use( '/api/user', require('./src/routers/user.router') );

/*app.listen( process.env.PORT, () => {
    console.log(`Server app in port ${ process.env.PORT }`);
});*/

serverHttp.listen( process.env.PORT, () => {
    console.log(`Server http in port ${ process.env.PORT }`);
});

