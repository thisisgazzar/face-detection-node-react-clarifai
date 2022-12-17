const express = require('express');
const http = require('http');
const detect = require('./detect');
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/detect', (req, res) => detect.handleDetect(req, res));

const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
    console.log(`Listening on ${port}`);
});