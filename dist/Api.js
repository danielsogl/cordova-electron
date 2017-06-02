"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var Api = (function () {
    function Api() {
        this.platform = 'electron';
        this.root = path_1.resolve(__dirname, '..');
    }
    return Api;
}());
exports.Api = Api;
