const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');



const APP = {
  env: process.env.NODE_ENV || 'development',

  sourcePath: path.resolve(__dirname, './app'),

  buildPath: path.resolve(__dirname, './build/dev'),
};
module.exports = {
  context: APP.sourcePath,
  entry: {
    app: './index.jsx',
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'immutable',
      'isomorphic-fetch',
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux-thunk',
      'redux',
    ]
  },
  output: {
    path: APP.buildPath,
    filename: 'assets/app-[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      APP.sourcePath,
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'assets/vendor-[hash].js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(APP.env),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      filename: 'index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10',
            ],
          }),
        ],
        context: APP.sourcePath,
      },
    }),
  ]
};
