const path = require('path');
const webpack = require('webpack');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';

const APP = {
  env: nodeEnv,
  isProduction: nodeEnv === 'production',

  sourcePath: path.resolve(__dirname, './app'),

  buildPath: path.resolve(__dirname, './dist'),
};

const webpackConfig = {
  context: APP.sourcePath,
  entry: {
    app: [
      './index.jsx',
    ],
    vendor: [
      'tether/dist/js/tether.min.js',
      'tether/dist/css/tether.min.css',
      'jquery/dist/jquery.min.js',
      'bootstrap/dist/js/bootstrap.min',
      'bootstrap/dist/css/bootstrap.min.css',
      'isomorphic-fetch',
      'react',
      'react-dom',
      'react-helmet',
      'react-moment',
      'react-octicon',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk',
    ],
  },
  output: {
    path: APP.buildPath,
    filename: 'assets/[name].js',
    publicPath: '/admin/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        use: 'url-loader?limit=8192',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      APP.sourcePath,
      'node_modules',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SQL-Module Admin',
      template: 'index.ejs',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(APP.env),
      },
      '__VERSION__': JSON.stringify(new Date()),
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery/dist/jquery.min.js',
      Tether: 'tether/dist/js/tether.min.js',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
};

// if Production
if (APP.isProduction) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new LodashModuleReplacementPlugin(),
    new ZipPlugin({
      filename: 'rdb-academy-sql-admin.zip',
    }));
} else {
  webpackConfig.entry.app.unshift(
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server');
  webpackConfig.entry.vendor.unshift(
    'react-proxy',
    'react-hot-loader');
  webpackConfig.plugins.push(
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin());
  webpackConfig.devServer = {
    hot: true,
    contentBase: APP.buildPath,
    publicPath: '/admin/',
    historyApiFallback: true,
    proxy: {
      '/admin/api': {
        target: 'http://localhost:9000',
      },
      '/api': {
        target: 'http://localhost:9000',
      },
    },
  };
}

module.exports = webpackConfig;
