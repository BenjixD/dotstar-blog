var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');	//To ignore externals

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
  // other plugins, postcss config etc. common for frontend and backend
};


//Front End
var FE_APP_DIR = path.resolve(__dirname, 'src/client/app');
var frontend = {
	entry: {
		index: FE_APP_DIR + '/index.jsx',
		/* Multiple Entry Points */
	},
	output:{
		path: path.join(__dirname, "src/client/public/build"),
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
	Object.assign({}, common, backend)
];

console.log(config);

module.exports = config;