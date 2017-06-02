const cordova = require('cordova');
const execProxy = require('cordova/exec/proxy');

export = (success: Function, fail: Function, service: string, action: string, args: any[]) => {

  // TODO call "native" method of plugin if electron exists, if not, try browser
  // Reference: https://github.com/apache/cordova-browser/blob/master/cordova-js-src/exec.js

};
