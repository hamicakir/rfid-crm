const FS = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'log.json');

function writeLogToJSON({ cardNumber, username = '' }) {
  console.log(__dirname);
  const data = { cardNumber, username, date: Date.now() };

  FS.readFile(filePath, { encoding: 'utf-8' }, (err, content) => {
    if (err) {
      console.log(err.errno);
      if (err.errno === -2) {
        const logData = { logs: [] };
        logData.logs.push(data);
        FS.writeFileSync(filePath, JSON.stringify(logData));
      }
    } else {
      console.log('CONTENT', content);
      const parsedFileData = JSON.parse(content);
      console.log('FILAPATH_DATA=>', filePath, data, content);
      parsedFileData.logs.push(data);
      console.log('new_Data', parsedFileData, data);
      FS.writeFileSync(filePath, JSON.stringify(parsedFileData));
    }
  });
}

module.exports = writeLogToJSON;
