"use strict";
var path_1 = require("path");
module.exports = (function () {
    function Api() {
        this.platform = 'electron';
        this.root = path_1.resolve(__dirname, '..');
        this.locations = {
            root: this.root,
            www: path_1.join(this.root, 'assets/www'),
            res: path_1.join(this.root, 'res'),
            platformWww: path_1.join(this.root, 'platform_www'),
            configXml: path_1.join(this.root, 'config.xml'),
            defaultConfigXml: path_1.join(this.root, 'cordova/defaults.xml'),
            build: path_1.join(this.root, 'build'),
            cordovaJs: path_1.join(this.root, 'bin/templates/project/assets/www/cordova.js'),
            cordovaJsSrc: path_1.join('cordova-js-src')
        };
    }
    return Api;
}());
