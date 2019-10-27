#!/usr/bin/env node

// Load modules
const app = require('commander');
const packageJSON = require('../../package.json');
const signature = require('./helpers/signature');
const text = require('./helpers/text');
const line = require('./helpers/line');

// Load actions
const actions = {
    clone: require('./actions/clone'),
    install: require('./actions/install'),
    clean: require('./actions/clean'),
    finish: require('./actions/finish')
};

// Init
let cmd = null;

// Set arguments
const arguments = '<target>';

// Set action
const action = async (target) => {
    const totalActions = Object.keys(actions).length;
    let currentAction = 1;
    cmd = target;

    text(signature);
    line();
    text('Crafting new storage application...');
    currentAction = await actions.clone(target, currentAction, totalActions);
    currentAction = await actions.install(target, currentAction, totalActions);
};

// Set options
app
    .version(packageJSON.version)
    .arguments(arguments)
    .action(action);

// Parse
app.parse(process.argv);

// Check the target if empty then throw error
if (!cmd) text('ERROR: You have to specify the target directory!', 'red');