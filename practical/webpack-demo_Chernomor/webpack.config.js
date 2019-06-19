const path                 = require('path');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const CleanWebpackPlugin   = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash       = require('webpack-md5-hash');

//const devMode              = process.env.NODE_ENV !== 'production';


// the path(s) that should be cleaned
let pathsToClean = [
	'dist',
	'build'
];

// the clean options to use
let cleanOptions = {
	// Absolute path to your webpack root folder (paths appended to this)
	// Default: root of your package
	root: __dirname,

	// Instead of removing whole path recursively,
	// remove all path's content with exclusion of provided immediate children.
	// Good for not removing shared files from build directories.
	exclude:  ['shared.js'],

	// Write logs to console.
	verbose:  true,

	// Use boolean "true" to test/emulate delete. (will not remove files).
	// Default: false - remove files
	dry:      false
};


module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use:  [
					'style-loader',
					MiniCssExtractPlugin.loader,
					//devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(pathsToClean, cleanOptions),
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css',
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			//filename: devMode ? 'style.css' : 'style.[hash].css',
			//chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		}),
		new WebpackMd5Hash(),
	]
};

