const path = require('path');
const webpack = require("webpack");
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app.js'),
  ],
  devServer: {
    contentBase: './src/index.html',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost',
  },
  devtool: 'eval',
  output: {
    path: buildPath,
    filename: "app.[hash].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve('src'),
        exclude: [nodeModulesPath]
      },
      {test: /\.(css)$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body'
    })
  ]
}

module.exports = config;
