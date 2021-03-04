const express = require('express');
const fs = require('fs');
require(__dirname  + '/lib/helper.js');
const url = require('url');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/*.*', function(req, res) {
    const options = url.parse(req.url, true);
    const mime = Helper.getMime(options);
    
    serveFile(res, options.pathname, mime);

});


function serveFile(res, pathName, mime) {
    
    mime = mime || 'text/html';
    
    fs.readFile(__dirname + '/' + pathName, function (err, data) {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            return res.end('Error loading ' + pathName + " with Error: " + err);
        }
        res.writeHead(200, {"Content-Type": mime});
        res.end(data);
    });
}

const server = app.listen(8081, () => console.log(`Server listening`));
