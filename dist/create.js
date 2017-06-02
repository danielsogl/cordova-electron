#!/usr/bin/env node
var path = require('path'), argv = require('nopt')({
    help: Boolean,
    cli: Boolean,
    shared: Boolean,
    link: Boolean,
}, { d: '--verbose' });
if (argv.help || argv.remain.length === 0) {
    process.exit(1);
}
