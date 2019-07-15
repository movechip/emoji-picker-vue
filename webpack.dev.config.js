const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = merge(webpackBaseConfig,{
    mode: "development",
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        port: "8088",
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080',
                pathRewrite: {'/api':''},
                changeOrigin: true,
                secure: false
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})