[![NPM](https://nodei.co/npm/jdf-webp-gif.png?downloads=true)](https://nodei.co/npm/jdf-webp-gif/)

[![NPM version](https://badge.fury.io/js/jdf-webp-gif.png)](http://badge.fury.io/js/jdf-webp-gif) [![Build Status](https://travis-ci.org/jdf2e/jdf-webp-gif.svg?branch=master)](https://travis-ci.org/jdf2e/jdf-webp-gif)

# jdf-webp-gif

> A cwebp-gif wrapper for JDF

## Install

```
$ npm install --save jdf-webp-gif
```

## Usage

```js
var execFile = require('child_process').execFile;
var cwebp = require('jdf-webp-gif');

execFile(cwebp, ['input.gif', '-o', 'output.webp'], function (err) {
	if (err) {
		throw err;
	}
	console.log('Image is converted!');
});
```

## CLI

```
$ npm install --global jdf-webp-gif
```

```
$ jdf-webp-gif --help
```