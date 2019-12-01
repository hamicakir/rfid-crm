const FS = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'person.json');

function getPersonFromJSON({ cardNumber }, cb) {
  console.log(__dirname);

  FS.readFile(filePath, { encoding: 'utf-8' }, (err, content) => {
    if (!err) {
      const parsedUserData = JSON.parse(content);
      const index = parsedUserData.persons.findIndex(
        person => person.cardNumber === cardNumber
      );
      console.log('PERSON =>', parsedUserData.persons[index]);
      if (index !== -1) {
        cb(parsedUserData.persons[index]);
      } else {
        cb(null);
      }
    } else {
      cb(null);
    }
  });
}

module.exports = getPersonFromJSON;
