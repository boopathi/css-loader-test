var Nested = require('postcss-nested');
var Mixins = require('postcss-mixins');
var SimpleVars = require('postcss-simple-vars');
var cssnext = require('cssnext');

module.exports = {
	entry: './index.js',
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
 	postcss: [ cssnext(), Nested, SimpleVars, Mixins],
	module: {
		loaders: [
			{
				test: /\.css$/,
				// loader: 'style?singleton!css?module&sourceMap!cssnext'
				loader: 'postcss'
			}
		]
	}
};
