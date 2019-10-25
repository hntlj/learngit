var webpack = require('webpack');
var path = require('path');

var config = {
	entry: ['./src/js/common.js', './src/js/enums.js', './src/js/public.js'],
	resolve:{
        extensions:['.js']
    },
	output: {
		// path: path.join(__dirname, './dist/js'),
		filename: 'manage_common.js'
	},
	module: {
		rules: [
			{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },
			{
		　　　　test: /\.(png|jpg|webp|gif)$/,
		        loader: 'url-loader?limit=1024&name=/img/[name].[hash:8].[ext]'
                // loader: 'url-loader?limit=1024&name=/img/[name].[ext]'
		　　 },
			{
				test: /\.html$/,
				loader: "html-loader"
			},
		]
	}
}

module.exports = config;
