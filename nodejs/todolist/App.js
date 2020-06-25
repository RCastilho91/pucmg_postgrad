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
        const info = chalk.green.bold.inverse(`Creating new task: ${ argv.name }`);
        console.log( argv.name );
        console.log( argv.description );
    }
});

yards.command({
    command: 'remove',
    describe: 'Remote a task from the todo list',
    handler: function () {
        console.log(chalk.red('Removing an existing task'));
    }
})

yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler: function () {
        console.log(chalk.blue('Listing out all tasks'));
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a task from the ToDo list',
    handler: function () {
        console.log(chalk.yellow('Reading a task'));
    }
})

yargs.parse();