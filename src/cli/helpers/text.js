// Modules
const chalk = require('chalk');

const text = (value, color = 'blue') => {
    console.log(chalk[color](value));
}; 
module.exports = text;