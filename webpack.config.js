const path = require('path');
const webpack = require('webpack');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';

const APP = {
  env: nodeEnv,
  isProduction: nodeEnv === 'production',

  sourcePath: path.resolve(__dirname, './app'),

  buildPath: path.resolve(__dirname, './build/dev'),
};

const webpackConfig = {
  context: APP.sourcePath,
  entry: {
    app: [
      './index.jsx',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-thunk',
    ]
  },
  output: {
    path: APP.buildPath,
    filename: 'assets/[name].js'
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
    new DashboardPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(APP.env),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'SQL-Module Admin',
      template: 'index.ejs',
    }),
  ],
};

// if Production
if(APP.isProduction) {
  webpackConfig.plugins.push(
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new LodashModuleReplacementPlugin
  );
} else {
  webpackConfig.entry.app.unshift(
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  );
  webpackConfig.entry.vendor.unshift(
    'react-proxy',
    'react-hot-loader'
  );
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
  webpackConfig.devServer = {
    hot: true,
    contentBase: APP.buildPath,
    publicPath: '/'
  };
}

module.exports = webpackConfig;
