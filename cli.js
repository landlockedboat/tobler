#!/usr/bin/env node
'use strict';
const meow = require('meow');
const tobler = require('.');

const cli = meow(`
Usage
	$ tobler [width] [height] [roughness]

Options
	--style [pretty|numbers] Style of the output [Default: pretty]

Examples
	$ tobler
	generates a pretty map on your terminal
	$ tobler --style=numbers
	generates a not-so-pretty map on your terminal
	$ tobler 5 5
	generates a 5 by 5 map on your terminal
`, {
	flags: {
		style: {
			type: 'string',
			default: 'pretty',
			alias: 's'
		}
	}
}
);

tobler(cli.input[0], cli.input[1], cli.input[2], cli.flags);
