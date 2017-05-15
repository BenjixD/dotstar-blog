var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');	//To ignore externals
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//Common
var common = {
  module: {
  	loaders: [ /* common loaders */ ]
  },
  plugins: [ /* common plugins */ ],
  resolve: {
      extensions: ['.js', '.jsx'] // common extensions
  },
  externals: [
		//Ignore any common modules	
	],
	node:{
		__dirname: true,
		__filename: true
	}
  // other plugins, postcss config etc. common for frontend and backend
};


//LESS to CSS
var LESS_APP_DIR = path.resolve(__dirname, 'src/client/less');
var LESS_APP_OUT = path.resolve(__dirname, 'src/client/public/css');
var lessToCSS = {
	entry: {
		index: LESS_APP_DIR + '/index.less',
		/* Multiple Entry Points */
	},
	output:{
		path: LESS_APP_OUT,
		filename: "[name].bundle.css",
	},
	module: {
		loaders:[{
			test:/\.less$/,
			loader: ExtractTextPlugin.extract({ 
				fallback: 'style-loader', 
				use: 'css-loader!less-loader' })	//compile less to CSS
		}]
	},
	plugins: [
		new ExtractTextPlugin("[name].bundle.css")
	]
}

//Front End
var FE_APP_DIR = path.resolve(__dirname, 'src/client/app');
var FE_APP_OUT = path.resolve(__dirname, "src/client/public/build");
var frontend = {
	entry: {
		index: FE_APP_DIR + '/index.jsx',
		/* Multiple Entry Points */
	},
	output:{
		path: FE_APP_OUT,
		filename: "[name].bundle.js",
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: FE_APP_DIR,
				loader: 'babel-loader',
				query: {
        	"presets": ["react", "es2017"]
      	}
			},
		/* Multiple Loaders */
		]
	},
	plugins: [ /* Front-End Plugins */ ],
};


//Back End
var BE_APP_DIR = path.resolve(__dirname, 'src/server/app');

var backend = {
	entry: {
		app: BE_APP_DIR + '/app.js', /*Single Entry Point*/	
	},
	target: 'node',
	output:{
		path: path.join(__dirname, "src/server/build"),
		filename: "[name].backend.js",
	},
	externals: [
	// specify node_modules not to be bundled
		nodeExternals()
	]
}


//Export
var config = [
	Object.assign({}, common, frontend),
	Object.assign({}, common, backend),
	Object.assign({}, lessToCSS)
];

console.log(config);

module.exports = config;