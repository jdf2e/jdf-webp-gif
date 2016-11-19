'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://raw.githubusercontent.com/wshxbqq/jdf-webp-gif/master/vendor/';
module.exports = new BinWrapper()
	.src(url + 'osx/gif2webp', 'darwin')
	.src(url + 'linux/x86/gif2webp', 'linux', 'x86')
	.src(url + 'linux/x64/gif2webp', 'linux', 'x64')
	.src(url + 'win/x86/gif2webp.exe', 'win32', 'x86')
	.src(url + 'win/x64/gif2webp.exe', 'win32', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'gif2webp.exe' : 'gif2webp');
