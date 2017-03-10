var http = require("http");
var os = require("os");

http.createServer(startServer).listen(8080);

function startServer(request, response) {
    var hostName = os.hostname();
    var freeMem = os.freemem();
    console.log("In CreateServer")
    response.writeHead(200, { "content-type": "text/plain" });
    response.write("Hello world");
    //response.write(hostName);
    //response.write(freeMem);
    console.log(hostName);
    response.end();
}
console.log("Started server...")