const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.0.1');

yards.command({
    command: 'add',
    describe: 'Adding new task in todo list',
    builder: {
        name: {
            describe: 'Task name',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Task description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function ( argv ){
        const info = chalk.green.bold.inverse('Creating new task: ');
    }
})