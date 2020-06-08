const http = require('http');

http.createServer(function (req, res){

    res.writeHead(200, {"content-Type": "text/plain; charse=utf8"});

    if (req.url == '/'){
        res.end('Homepage de Juan');
    }

    if (req.url == '/productos'){

        res.end('Estos son todos nuestros productos');
    }

    if (req.url == '/consultas'){

        res.end('Sus consultas seran respondidas llamando al *711');
    }

    else {res.end('Not Found');}

}).listen(3030, 'localhost');

