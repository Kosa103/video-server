const express = require('express');
const fs = require('fs');
require(__dirname  + '/lib/helper.js');
const url = require('url');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const LOGIN = require("./variables");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.post("/api/login", (req, res) => {
    const loginData = req.body;

    if (
        (loginData.name === LOGIN.DATA.NAME1 && loginData.password === LOGIN.DATA.PASSWORD1) ||
        (loginData.name === LOGIN.DATA.NAME2 && loginData.password === LOGIN.DATA.PASSWORD2)
    ) {
        res.send();
    } else {
        res.status(401).send("Error! Incorrect name or password!");
    }
});

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
