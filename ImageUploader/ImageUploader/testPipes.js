var request = require("request");
var fs = require("fs");

var s = request("http://pradeeploganathan.com").pipe(fs.createWriteStream("pradeep.html"));

s.on("data", function (dataChunk)
{
    console.log("Writing data >>>>>>" + dataChunk);
});

s.on("done", function ()
{
    console.log(">>>>End of data streamed ")
});
