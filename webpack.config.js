var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

// webpack consist of entry => module loaders => plugins => output
module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist' // for webpack-dev-server
    },
    module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: extractPlugin.extract({
                      use: [
                          "css-loader",
                          "sass-loader"
                      ]
                    })
                },
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['es2015']
                            }
                        }
                    ]
                }
            ]
    },
    plugins: [
        extractPlugin
    ]
};