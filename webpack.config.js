var path = require('path');
// 引入“html-webpack-plugin”插件
var htmlWebpackPlugin = require('html-webpack-plugin');
// 引入“clean-webpack-plugin”插件
var cleanWebpackPlugin = require('clean-webpack-plugin');
// 引入“extract-text-webpack-plugin”插件
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');
var extractCSS = new extractTextWebpackPlugin('css/[name]-one.css');
var extractLESS = new extractTextWebpackPlugin('css/[name]-two.css');
module.exports = {
  entry: path.resolve(__dirname, './src/js/app.js'), // 制定webpack打包的入口是app.js
  output: {
    path: path.resolve(__dirname, './dist'), // 指定打包后js文件放置的位置
    filename: 'js/bundle-[hash].js' // 指定打包后的js名称，这个就是index.html最终引入的js名称
  },
  module: {
    rules: [{
      test: /\.css$/, //匹配所有css文件
      use: extractCSS.extract([
        // {loader: 'style-loader'}, // style-loader不能和插件一起使用
        {loader: 'css-loader', options: {importLoaders: 1}}, // importLoaders解决由于css-loader处理文件导入的方式导致postcss-loader不能正常使用的问题
        {loader: 'postcss-loader'}
      ]), //指定加载器
      exclude: /node_modules/ //排除node_modules文件夹下所有的资源的匹配
    }, {
      test: /\.less$/, //匹配所有less文件
      use: extractLESS.extract([
        // {loader: 'style-loader'},
        {loader: 'css-loader', options: {importLoaders: 1}},
        {loader: 'postcss-loader'},
        {loader: 'less-loader'} // less-loader放在最后，因为要最先加载（loader从右往左的加载规则）
      ])
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html', // 定义插件读取的模板文件是根目录下的index.html文件
      filename: 'index.html' // 定义通过模板文件新生成的页面名称
    }),
    new cleanWebpackPlugin(
      ['dist'], {
        root: __dirname, // 指定插件根目录位置
        verbose: true, // 开启在控制台输出信息
        dry: false // 启用删除文件
      }
    ),
    extractCSS,
    extractLESS
  ]
}