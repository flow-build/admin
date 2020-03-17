const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    new WebpackBuildNotifierPlugin(),
    new Dotenv(),
  ],
});
