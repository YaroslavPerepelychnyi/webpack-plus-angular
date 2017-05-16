var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.[hash].css'
});

// webpack consist of entry => module loaders => plugins => output
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist' // for webpack-dev-server
    },
    devtool: "source-map",
    module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: extractPlugin.extract({
                      use: [
                          {
                              loader: 'css-loader',
                              options: {
                                  sourceMap: true
                              }
                          },
                          {
                              loader: 'sass-loader',
                              options: {
                                  sourceMap: true
                              }
                          }
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
                },
                {
                    test: /\.html$/,
                    use: ['html-loader']
                },
                {
                    test: /\.(jpg|png)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }]
                }
            ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html' // template for index.html without css and js inputs
        }),
        new CleanWebpackPlugin(['dist']) // remove dist folder each time when run webpack
    ]
};