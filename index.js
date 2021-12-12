const express = require('express');
const cors = require('cors');
const path = require('path');
const { dbConnection } = require('./src/database/config');
require('dotenv').config();

// Create express server/application
const app = express();

// DataBase
dbConnection();


// Public directory
app.use( express.static('src/public') );

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

var connections = {};

io.on('connection', function(socket){
    socket.on('send-message', function(data){
        //console.log(data);
        if(connections[data.otherId]){
            let response = {
                text: data.message,
                receiver: data.otherId,
                sender: data.currentId,
                isNew: data.isNew,
                idChat: data.idChat
            }
            connections[data.otherId].emit("text-event", response);
        }
    })
    socket.on('send-idConnection', function(data){
        connections[data] = socket;
    })
    socket.on('disconnect', () =>{;

        for (var k in connections){
             if(connections[k] == socket){
                delete connections[k];
            }
        }
        //console.log(Object.keys(connections).length);
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
app.use( '/api/chat', require('./src/routers/chat.router') );
app.use( '/api/homeimage', require('./src/routers/homeimage.router') );

app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'src/public/index.html') );
} )

/*app.listen( process.env.PORT, () => {
    console.log(`Server app in port ${ process.env.PORT }`);
});*/

serverHttp.listen( process.env.PORT, () => {
    console.log(`Server http in port ${ process.env.PORT }`);
});

