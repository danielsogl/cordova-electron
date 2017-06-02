#!/usr/bin/env node
"use strict";
var fs_1 = require("fs");
var path_1 = require("path");
var ROOT = path_1.join(__dirname, '..');
module.exports = {
    createProject: function (projectPath, packageName, projectName) {
        if (projectPath === void 0) { projectPath = 'CordovaExample'; }
        var VERSION = fs_1.readFileSync(path_1.join(ROOT, 'VERSION'), 'utf-8');
        if (fs_1.existsSync(projectPath)) {
            console.error('Project already exists');
            process.exit(2);
        }
    }
};
