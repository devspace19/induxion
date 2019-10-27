// Load modules
const rimraf = require('rimraf');
const text = require('./text');

const rollback = (target) => {
    text('=== ROLLING BACK CHANGES ===', 'green');
    return rimraf(`${process.cwd()}/${target}`);
};
module.exports = rollback;