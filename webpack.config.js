var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      './node_modules/react/dist/react.js',
      './node_modules/react-dom/dist/react-dom.js',
      './node_modules/fastclick/lib/fastclick.js',
      './node_modules/zepto/dist/zepto.js'
    ],
    app: './src/app.js'
  },
  output: {
    path: "./dist",
    filename: "[name].js",
    chunkFilename: '[name].chunk.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: path.resolve('src')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=81920'},
      {test: /\.html$/, loader: "html"},
      {test: /\.json$/, loader: 'json'}
    ]
  },
  babel: {
    presets: ['es2015', 'stage-0']
  },
  resolve: {
    root: path.join(__dirname, 'node_modules'),
    extension: ['', '.js']
  },
  plugins: [
    new ExtractTextPlugin('style.css', {allChunks: true, disable: false}),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      $: 'Zepto'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: 'source-map'
}
