#!/usr/bin/env node

import {
  readFileSync,
  existsSync
} from 'fs';

import {
  join

} from 'path';

const ROOT = join(__dirname, '..');

export = {
  createProject: (projectPath: string = 'CordovaExample', packageName: string, projectName: string) => {

    const VERSION = readFileSync(join(ROOT, 'VERSION'), 'utf-8');

    if (existsSync(projectPath)) {
      console.error('Project already exists');
      process.exit(2);
    }

    // TODO copy necessary files to create an electron project

  }
};
