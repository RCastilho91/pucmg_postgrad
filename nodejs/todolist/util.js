/*
    Create function that receives params
    create a log file with the content
    if file does not exist, create file
    else add added content in new line
    add log, date and time when added
    call within App.js
*/

function logCreator(content){
    let timeStamp = new Date();
    const fs = require('fs');
    const fileName = "./log.txt";

    if (fs.existsSync(fileName)) {
        fs.appendFileSync(fileName, `${ timeStamp } | ${ content }\n`);
    } else {
        fs.writeFileSync(fileName, `${ timeStamp } | ${ content }\n`);
    }
}

module.exports = logCreator;