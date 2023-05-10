console.log('In main.js');
var btnJoin = document.querySelector("#end-conf");

var username = 'username'

var webSocket

function webSocketOnMessage(event)
{
    var parsedData = JSON.parse(event.data);
    var message = parsedData['message'];

    console.log('Message: ', message);
}



btnJoin.addEventListener('click', () => {

    console.log('In event listener');

//    btnJoin.disabled = true;

    var loc = window.location;
    var wsStart = 'ws://';

    if (loc.protocol == 'https:')
    {
        wsStart = 'wss://';
    }

    var endpoint = wsStart + loc.host + loc.pathname;
    console.log('End point: ', endpoint);

//    var WebSocketServer = require('ws').Server;
    webSocket = new WebSocket(endpoint);
//    var WebSocket = new WebSocketServer({port: 8000});
//    WebSocket.on('connection', function(connection) {
//                   console.log("user connected");
//
//                   when server gets a message from a connected user
//                   connection.on('message', function(message) {
//                      console.log("Got message from a user:", message);
//                   });
//
//                   connection.send("Hello from server");
//                });
    webSocket.addEventListener('open', (e) => {
        console.log('Connection opened');
    });
    webSocket.addEventListener('message', webSocketOnMessage);
    webSocket.addEventListener('close', (e) => {
        console.log('Connection closed');
    });
    webSocket.addEventListener('error', (e) => {
        console.log('Connection error');
    });
});