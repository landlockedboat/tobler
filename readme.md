# tobler [![Build Status](https://travis-ci.org/vikepic/tobler.svg?branch=master)](https://travis-ci.org/vikepic/tobler)

[![asciicast](https://asciinema.org/a/60YPdDBB5sCstpqAxsRFWu6Sy.png)](https://asciinema.org/a/60YPdDBB5sCstpqAxsRFWu6Sy)

> A simple cli cartographer

Named after [Waldo R. Tobler](https://en.wikipedia.org/wiki/Waldo_R._Tobler), the inventor of [the first law of geography](https://en.wikipedia.org/wiki/Tobler%27s_first_law_of_geography).

## CLI

```
$ npm install --global tobler
```

```
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
```

## License

MIT © [vikepic](https://vikepic.github.io)
