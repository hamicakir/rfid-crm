const FS = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'log.json');

function getLogsFromJSON(res) {
  console.log(__dirname);

  FS.readFile(filePath, { encoding: 'utf-8' }, (err, content) => {
    if (!err) {
      const parsedLogs = JSON.parse(content);

      console.log('LOGS_GET =>', parsedLogs.logs);
      res.send(parsedLogs);
    } else {
      console.log('ERR', err);
      res.send({ logs: [] });
    }
  });
}

module.exports = getLogsFromJSON;
