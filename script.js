const formatter = require('./formatter');

const args = process.argv.slice(2);
const notesFile = args[0];

formatter(notesFile)

// node script.js {raw-notes-file.txt}
