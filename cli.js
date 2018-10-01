#!/usr/bin/env node
'use strict';
const meow = require('meow');
const cordilleraCli = require('.');

const cli = meow(`
	Usage
		$ tobler [detail] [roughness]

	Options
		--style [pretty|numbers] Style of the output [Default: pretty]

	Examples
		$ tobler
		generates a pretty map on your terminal
		$ tobler --style=numbers
		generates a not-so-pretty map on your terminal
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

cordilleraCli(cli.input[0], cli.input[1], cli.flags);
