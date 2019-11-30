const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', () => {
  console.log('a user is connected');
});

const PORT = 3030;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http.listen(PORT, () => {
  console.log('server is running on port', server.address().port);
});
