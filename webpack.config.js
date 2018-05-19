const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './client/src/main.js',
  output: {
    path: resolve(__dirname, 'api/static'),
    publicPath: './api/static',
    filename: 'bundle.js'
  },
  target: 'web',
  devtool: 'source-map',
  devServer: {
    contentBase: './api/static/',
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 7001,
    publicPath: '.'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: resolve(__dirname, 'api/static/main.css'),
      allChunks: true
    }),
    new WriteFilePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'node-static',
      filename: 'node-static.js',
      minChunks(module/*, count*/) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    })
  ],
  resolve: {
    alias: {
      generic: resolve(__dirname, 'client/src/generic/'),
      mocks: resolve(__dirname, 'client/src/mocks/'),
      src: resolve(__dirname, 'client/src/')
    },
    modules: [
      resolve('./'),
      resolve('./node_modules')
    ]
  }
};
