const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const writeLogToJSON = require('./writeLogToJSON');
const addPersonToJSON = require('./addPersonToJSON');
const getPersonFromJSON = require('./getPersonFromJson');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

io.on('connection', socket => {
  console.log('a user is connected');

  socket.on('card read', data => {
    console.log(`${Date.now()} => `, data);
    writeLogToJSON({ cardNumber: data });
    getPersonFromJSON({ cardNumber: data }, user =>
      socket.emit('card readed', { cardNumber: data, user })
    ); // burası callback metodumuz olarak düşünülebilir);
  });

  socket.on('disconnect', () => {
    /*
    Burada çeşitli temizleme operasyonları yapılabilir.
    Mesela istemcinin geliş gidiş hareketlerini takip ediyorsak,
    burada state değişikliği yaptırtabiliriz.
    */
    console.log(
      `${Date(Date.now()).toLocaleString()}istemci bağlantıyı kapattı`
    );
  });
});

const PORT = 3030;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/save-user', (req, res) => {
  try {
    const { cardNumber, username } = req.body;
    addPersonToJSON({ cardNumber, username });
    res.send({ success: true });
  } catch (e) {
    res.send({ success: false, error: e });
  }
});

const server = http.listen(PORT, () => {
  console.log('server is running on port', server.address().port);
});
