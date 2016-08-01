const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [path.join(__dirname, '/src/app.js')],
  output: {path: './dist', filename: 'app.[hash].js'},
  module: {
    loaders: [{test: /\.js$/, loaders: ['babel'], exclude: /node_modules/}]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}}),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html'), inject: 'body'})
  ]
}

module.exports = config;
