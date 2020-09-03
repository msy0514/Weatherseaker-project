//using http module for communicate between server and client
//using websocket(http5) or long poling


//take 'http'module
var http = require('http');

var server = http.createServer();
var host = '192.168.10.25';
var port = 3000;

server.listen(port, host, function(){
    console.log('start server');
});

//event 1. connection : client login and create connection
//event 2. request : when client need
//event 3. close: when server close

//using socket to know client inform
server.on('connection',function(socket){
    console.log('client logsin',
                socket.remoteAddress+','
                +socket.remotePort);
});
//writeHead(statusCode[, statusMessage][,headers]) : make header for response
//write(chunk[,encoding][,callback]) : make response body data. it calls more
//end([data][,encoding][,callback]) : send response to client

server.on('request', function(req, res){
    console.log('client call');
    //inform of header
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    //DOM
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("     <title>I'm server</title>");
    res.write("     <meta charset='UTF-8'>");
    res.write("     <meta name = 'description' content=' '>");
    res.write("     <meta name = 'keywords' content = ' '>");
    res.write("</head>");
    res.write("<body>");
    res.write("<div>hello world</div>");
    res.write("</body>");
    res.write("</html>");
    //response end
    res.end();
})
//server close
server.on('close', function(){
    console.log('close server');
});
