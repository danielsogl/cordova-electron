#!/usr/bin/env node

const path = require('path'),
    argv = require('nopt')({
        help: Boolean,
        cli: Boolean,
        shared: Boolean,
        link: Boolean,
    }, { d: '--verbose' });

if (argv.help || argv.remain.length === 0) {
    // TODO show usage info
    process.exit(1);
}

