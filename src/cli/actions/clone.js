// Load modules
const Git = require('nodegit');
const text = require('../helpers/text');
const line = require('../helpers/line');
const { URL } = require('url');
const { templateRepoURL, token } = require('../config');
const fs = require('fs');

const isEmptyTarget = target => new Promise((resolve, reject) => {
    const path = `${process.cwd()}/${target}`;
    if (fs.existsSync(path)) {
        fs.readdir(path, (err, files) => {
            if (err) reject(new Error(err));
            else {
                if (files.length) reject(new Error('Directory is not empty! Please choose another directory'));
                else resolve();
            }
        });
    } else resolve();
});

const clone = async (target, currentAction, totalActions) => {
    // Clone
    try {

        // Check if the target is an empty directory
        await isEmptyTarget(target);

        // Clone
        await Git.Clone(templateRepoURL, `${process.cwd()}/${target}`);

        // Success
        text(`[${currentAction}/${totalActions}] Template cloned`, 'green');
        return currentAction + 1;
    } catch (e) {
        text(`ERROR: ${e.message}`, 'red');
        line();
        process.exit();
    }
};
module.exports = clone;