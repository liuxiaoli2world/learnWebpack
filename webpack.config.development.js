/**
 * 开发环境配置
 */
process.env.NODE_ENV = 'development';
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = Merge(CommonConfig, {
  devtool: 'inline-source-map',  
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