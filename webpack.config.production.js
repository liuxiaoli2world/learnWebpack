/**
 * 生产环境配置
 */
process.env.NODE_ENV = 'production';
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
  // devtool: 'nosources-source-map',  
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});