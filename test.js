import test from 'ava';
import tobler from '.';

test('Main test', t => {
	const output = [];
	console.log = function (out) {
		output.push(out);
	};
	tobler(3, 0.7, {style: 'pretty'});
	t.truthy(output);
});
