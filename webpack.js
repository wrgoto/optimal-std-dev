var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'lib',
    filename: 'optimal-std-dev.js',
    library: 'optimal-std-dev',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
};
