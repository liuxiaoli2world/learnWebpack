/**
 * 开发环境配置
 */
process.env.NODE_ENV = 'development';
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');
const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = Merge(CommonConfig, {
  devtool: 'inline-source-map',
  // 用server.js启动时只能是根路径（原因还不明确）
  output: {
    path: path.resolve(__dirname, './dist'), // 指定打包后js文件放置的位置
    filename: 'js/[name]-bundle-[hash].js', // 指定打包后的js名称，这个就是index.html最终引入的js名称
    publicPath: '/', //指定资源公共路径
  },
  // output: {
  //   path: path.resolve(__dirname, './dist/portal/'), // 指定打包后js文件放置的位置
  //   filename: 'js/[name]-bundle-[hash].js', // 指定打包后的js名称，这个就是index.html最终引入的js名称
  //   publicPath:  '/portal', //指定资源公共路径
  // },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // // lazy: true,
    // progress: true,
    // historyApiFallback: true,
    // port: 9000
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    progress: true,
    stats: {
      colors: true
    },
    // open: true
    // noInfo: false,
    // stats: 'minimal',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest', 'runtime']
      // name: 'vendor'
    }),
    // new OpenBrowserPlugin({url: `http://localhost:${CommonConfig.devServer.port}/` + 'index.html'}),
  ]
});