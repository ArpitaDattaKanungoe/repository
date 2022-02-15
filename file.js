const http = require('http');
const fs = require('fs');

const server= http.createServer();

server.on("request",(req,res)=>
{
  var fs = require('fs');
  fs.readFile('input.txt',function(err,data){
    if(err)
    return console.error(err);
  res.end(data.toString());
  });
})

server.listen(8000,"127.0.0.1");

