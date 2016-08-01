const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app.js')
  ],
  devServer: {contentBase: './src', hot: true, inline: true, port: 3000, host: 'localhost'},
  devtool: 'source-map',
  output: {filename: 'app.js'},
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
      {test: /\.(css)$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html'), inject: 'body'})
  ]
}

module.exports = config;
