const commander = require('commander');

const program = new commander.Command();

program
    .command('generate')

program.parse(process.argv);
console.log('Hola');
