'use strict';
const fs = require('fs');

module.exports = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const formatted = transform(data);
    fs.writeFile('formatted.txt', formatted, (err) => {
      if (err) throw err;
      console.log('File saved');
    });
  });
}

function transform(data) {
  const formatted = data
    .replace(/(\n\s*){2}/gm, '\n')
    .replace(/LOCATION: \d*/g, '')

  return formatted;
}
