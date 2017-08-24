const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');
const entry = "./webpack.entry.js"; // ex.: "./wwwroot/entry.ts"
const distPath = "/dist"; // ex.: "/wwwroot/dist"
const exclude = /(node_modules)|(dist)/; // folder to exclude


module.exports = {
	entry: entry,
	output: {
		filename: "bundle.js",
		path: __dirname + distPath
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".ts", ".tsx", ".json", ".scss", ".css", ".vue"],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.html?$/,
				exclude: exclude,
				loader: "source-map-loader"
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: exclude
			},
			{
				test: /\.tsx?$/,
				exclude: exclude,
				loader: "awesome-typescript-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
					}
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: exclude,
				loader: "source-map-loader"
			},
			{
				test: /\.scss$/,
				exclude: exclude,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.css$/,
				exclude: exclude,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader"]
				})
			},
			{
				test: /(\.css$)|(\.scss$)/,
				exclude: exclude,
				loader: 'postcss-loader',
				options: {
					plugins: () => [require('autoprefixer')({ browsers: 'last 30 versions' })],
					sourceMap: true,
				}
			}
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new LiveReloadPlugin({})
	]
};


//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const LiveReloadPlugin = require('webpack-livereload-plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

//const path = require('path');
//const entry = "./webpack.entry.js"; // ex.: "./wwwroot/entry.ts"
//const distPath = "/dist"; // ex.: "/wwwroot/dist"
//const exclude = /(node_modules)|(dist)/; // folder to exclude

//module.exports = {
//	entry: entry,
//	output: {
//		filename: "bundle.js",
//		path: __dirname + distPath
//	},
//	devtool: "source-map",
//	resolve: {
//		extensions: [ ".js", ".ts", ".tsx", ".json", ".scss", ".css", ".vue"],
//		alias: {
//			'vue$': 'vue/dist/vue.esm.js'
//		}
//	},
//	module: {
//		rules: [
//			{
//				test: /\.html?$/,
//				exclude: exclude,
//				loader: "source-map-loader"
//			},
//			{
//				test: /\.vue$/,
//				loader: 'vue-loader',
//				options: {
//					loaders: {
//						'scss': 'vue-style-loader!css-loader!sass-loader',
//						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
//					}
//				}
//			},
//			{
//				test: /\.js$/,
//				loader: 'babel-loader',
//				exclude: exclude
//			},
//			{
//				test: /\.tsx?$/,
//				exclude: exclude,
//				loader: 'ts-loader',
//				options: {
//					appendTsSuffixTo: [/\.vue$/],
//				}
//			},
//			{
//				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
//				loader: 'file-loader'
//			},
//			{
//				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
//				loader: 'file-loader',
//				query: {
//					name: '[name].[ext]?[hash]'
//				}
//			},
//			{
//				enforce: "pre",
//				test: /\.js$/,
//				exclude: exclude,
//				loader: "source-map-loader"
//			},
//			{
//				test: /\.scss$/,
//				exclude: exclude,
//				use: ExtractTextPlugin.extract({
//					fallback: 'style-loader',
//					use: ['css-loader', 'sass-loader']
//				})
//			},
//			{
//				test: /\.css$/,
//				exclude: exclude,
//				use: ExtractTextPlugin.extract({
//					fallback: "style-loader",
//					use: ["css-loader"]
//				})
//			},
//			{
//				test: /(\.css$)|(\.scss$)/,
//				exclude: exclude,
//				loader: 'postcss-loader',
//				options: {
//					plugins: () => [require('autoprefixer')({ browsers: 'last 30 versions' })],
//					sourceMap: true,
//				}
//			}
//		]
//	},
//	externals: {
//		"react": "React",
//		"react-dom": "ReactDOM"
//	},
//	plugins: [
//		new ExtractTextPlugin('bundle.css'),
//		new LiveReloadPlugin({})
//	]
//};
