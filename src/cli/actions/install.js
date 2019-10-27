// Load Modules
const text = require('../helpers/text');
const line = require('../helpers/line');
const rollback = require('../helpers/rollback');
const exec = require('child_process').exec;

const checkRequirements = async () => {
    const commands = 'node --version && npm --version';
    const optionalCommands = 'yarn --version';
    await new Promise((resolve, reject) => {
        exec(commands, err => {
            if (err) reject(new Error('You must install Node JS first!'));
            else resolve();
        });
    });
    return await new Promise((resolve, reject) => {
        exec(optionalCommands, err => {
            if (err) resolve(false);
            else resolve(true);
        });
    });
};

const packageInstall = cmd => {
    return new Promise((resolve, reject) => {
        exec(cmd, err => {
            if (err) reject(new Error(err));
            else resolve();
        })
    });
};

const install = async (target, currentAction, totalActions) => {
    try {
        text(`[${currentAction}/${totalActions}] Checking the required commands...`, 'green');
        currentAction++;

        const isUseYarn = await checkRequirements();
        text(`[${currentAction}/${totalActions}] All required commands passed!`, 'green');
        currentAction++;

        // Run the node package installation
        text(`[${currentAction}/${totalActions}] Installing dependencies...`, 'green');
        currentAction++;

        const path = `${process.cwd()}/${target}`;
        const cmd = `cd ${path} && ${isUseYarn ? 'yarn' : 'npm install'}`;
        await packageInstall(cmd);
        text(`All dependencies installed! It's ready to develop something cool!`, 'green');
    } catch (e) {
        text(`ERROR: ${e.message}`, 'red');
        line();
        await rollback(target);
        process.exit();
    }

};
module.exports = install;