var Nested = require('postcss-nested');
var Mixins = require('postcss-mixins');
var SimpleVars = require('postcss-simple-vars');

module.exports = {
	entry: './index.js',
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	cssnext: {
		plugins: [ SimpleVars, Mixins, Nested ]
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				// loader: 'style?singleton!css?module&sourceMap!cssnext'
				loader: 'cssnext'
			}
		]
	}
};
