var webpack = require('webpack');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: path.resolve('src')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap')},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      { test: /\.styl$/, loader: "style!css" },
      { test: /\.html$/, loader: "html" },
      {test: /\.(png|jpg)$/, loader: 'url?limit=32768'},
      {test: /\.json$/, loader: 'json'}
    ]
  },
  resolve:{
    root: path.join(__dirname, 'node_modules'),
  },
  devtool: 'source-map'
}
