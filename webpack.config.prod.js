const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'lib/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-css-loaders.js',
    publicPath: 'dist/',
    library: 'ReactCSSLoading',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: false,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
};
