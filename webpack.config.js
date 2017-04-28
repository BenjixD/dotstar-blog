var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

//Common
var common = {
    module: {
        loaders: [ /* common loaders */ ]
    },
    plugins: [ /* common plugins */ ],
    resolve: {
        extensions: ['.js', '.jsx'] // common extensions
    }
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
		path: path.join(__dirname, "src/client/build"),
		filename: "[name].bundle.js",
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader'
			},
		/* Multiple Loaders */
		]
	},
	plugins: [ /* Front-End Plugins */ ],
};


//Back End
var BE_APP_DIR = path.resolve(__dirname, 'src/server/app');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var backend = {
	entry: {
		app: BE_APP_DIR + '/app.js', /*Single Entry Point*/	
	},
	output:{
		path: path.join(__dirname, "src/server/build"),
		filename: "[name].backend.js",
	},
	target: 'node',
	externals: {
		// specify node_modules to be not bundled
		nodeModules
	}
}


//Export
var config = [
	Object.assign({}, common, frontend),
	Object.assign({}, common, backend)
];

console.log(config);

module.exports = config;