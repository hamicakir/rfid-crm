const FS = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'person.json');

function addPersonToJSON({ cardNumber, username = '' }) {
  console.log(__dirname);
  const data = { cardNumber, username, date: Date.now(), status: 'ACTIVE' };

  FS.readFile(filePath, { encoding: 'utf-8' }, (err, content) => {
    if (err) {
      console.log(err.errno);
      if (err.errno === -2) {
        const personData = { persons: [] };
        personData.persons.push(data);
        FS.writeFileSync(filePath, JSON.stringify(personData));
      }
    } else {
      console.log('CONTENT', content);
      const parsedFileData = JSON.parse(content);
      console.log('FILAPATH_DATA=>', filePath, data, content);
      parsedFileData.persons.push(data);
      console.log('new_Data', parsedFileData, data);
      FS.writeFileSync(filePath, JSON.stringify(parsedFileData));
    }
  });
}

module.exports = addPersonToJSON;
