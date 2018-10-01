'use strict';

const chalk = require('chalk');
const Cordillera = require('cordillera');

const acceptedExportTypes = ['numbers', 'pretty'];
const levels = ['^', '_', '~'];
const colors = [chalk.yellow, chalk.green, chalk.blue];

function getStyle(value, style) {
	switch (style) {
		case 0:
			return value;
		case 1:
			return colors[value](levels[value]);
		default:
			throw new Error(`No accepted export value with type ${style}.`);
	}
}

module.exports = function (detail = 4, roughness = 0.7, flags) {
	const style = acceptedExportTypes.indexOf(flags.style);

	if (style === -1 || style > acceptedExportTypes.length - 1) {
		throw new Error(`Invalid style ${style}`);
	}

	const map = new Cordillera(detail, roughness).getLevels(3);

	for (let y = 0; y < map.length; ++y) {
		let line = '';
		for (let x = 0; x < map[y].length; ++x) {
			const tile = map[y][x];
			line += getStyle(tile, style);
		}
		console.log(line);
	}
};
