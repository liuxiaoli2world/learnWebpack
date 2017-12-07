var webpack = require('webpack');　　
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");

// 加上下面的话报错
// config.entry.index.unshift("webpack-dev-server/client?http://localhost:9000"); // 将执替换js内联进去
// config.entry.index.unshift("webpack/hot/only-dev-server");

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    hot: true,
    historyApiFallback: false,
    // noInfo: true,
    stats: {　　
        colors: true // 用颜色标识
            　　
    },
    　　proxy: {　　　　
        "*": "http://localhost:9000/portal" // 用于转发api数据，但webpack自己提供的并不太好用
    },
});
server.listen(9000);


// 用该方式启动时浏览器需要自己手动刷新，原因目前还没找到