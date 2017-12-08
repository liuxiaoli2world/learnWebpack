/**
 * 生产环境配置
 */
process.env.NODE_ENV = 'production';
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');
const webpack = require('webpack');
const path = require('path');
module.exports = Merge(CommonConfig, {
  devtool: 'nosources-source-map', 
  output: {
    path: path.resolve(__dirname, './dist'), // 指定打包后js文件放置的位置
    filename: 'js/[name]-bundle-[hash].js', // 指定打包后的js名称，这个就是index.html最终引入的js名称
    // publicPath: 'http://localhost:9000/', //指定资源公共路径
    publicPath: './', //指定资源公共路径
  }, 
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