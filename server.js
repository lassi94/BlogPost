
const express = require('express');
//For forms
const bodyParser = require('body-parser');
//directories
const path = require('path');
//http server
const http = require('http');
const app = express();

const api = require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

//Set api routes
app.use('/api', api);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));

});

//Set port
const port = process.env.PORT || '3000';
app.set('port', port)

const server = http.createServer(app);

server.listen(port, function(){
    console.log('Running on localhost: ' + port);
})