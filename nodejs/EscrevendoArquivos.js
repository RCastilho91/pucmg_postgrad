// creating a variable for the File Sync module
const fs = require('fs');

// setting file name to a constant
const fileName = "file.txt"

// writing new file (filename, content)
fs.writeFileSync(fileName, 'First content\n');

// adding content to existing file
fs.appendFileSync(fileName, 'Added content');