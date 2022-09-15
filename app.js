var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'NodeJS. Hello World. It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        apikey =  process.env.API_KEY ?? 'api key',
        response = [message, version, apikey].join('\n');
    res.end(response);
});
server.listen();