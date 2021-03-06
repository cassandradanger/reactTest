/**
 * Created by casie on 9/28/16.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    context: __dirname + '/src',
    entry: './app.js',

    output: {
        filename: 'app.[hash].js',
        path: __dirname + '/dist',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.template.html',
            inject: 'body',
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.png$/, loader: 'url-loader?limit=100000' },
            { test: /\.jpg$/, loader: 'file-loader' }
        ]
    }
}