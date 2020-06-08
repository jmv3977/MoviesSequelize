const http = require('http');
const router = require('./router');

http.createServer(function(req, res){

res.writeHead(200, {"content-Type": "text/plain"});

router.routes(req,res);

}).listen(3000,'localhost')