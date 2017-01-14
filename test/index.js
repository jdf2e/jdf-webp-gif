'use strict';
var gif2webp = require("../");
var fs = require("fs");
var execFile = require('child_process').execFile;
var path = require("path");

execFile(gif2webp, ['-version'], function(error, stdout, stderr) {
    if (error) {
        throw error;
    }
});

var testPath = path.join(__dirname, "1_mini.gif.webp");
if (fs.existsSync(testPath)) {
    fs.unlinkSync(testPath)
}

execFile(gif2webp, [path.join(__dirname, "1.gif"), '-o', testPath], error => {
    if (error) {
        throw error;
    }
});
