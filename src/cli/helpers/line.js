// Modules
const chalk = require('chalk');

const line = (color = 'blue') => {
    console.log(chalk[color](('====================================================================')));
}; 
module.exports = line;