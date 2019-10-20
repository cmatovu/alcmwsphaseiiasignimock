var express = require('express');

// 2. Express server
var app = express.createServer();

console.log(' [*] Listening on 0.0.0.0:9090' );
app.listen(9090, '0.0.0.0');

app.get('/', function (req, res) {
 //   res.sendfile(__dirname + '/index.html');
    res.send(" Hi there")
});
