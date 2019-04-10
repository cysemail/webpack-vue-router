const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  performance: {
    hints: "warning", // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function (assetFilename) { // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devServer: { //这是配置dev-server 命令参数的第二种形式，麻烦
    // --open -- port 3000 --contentBase src --hot
    open: true,
    port: 3000,
    contentBase: path.join(__dirname, 'src'),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // new 一个热更新的模块对象 
    new htmlWebpackPlugin({  //创建一个在内存中生成HTML页面的插件
      template: path.resolve(__dirname, './src/index.html'), //指定模板页面
      filename: 'index.html' //指定生成页面的名称
    }),
    new VueLoaderPlugin()
  ],
  module: { //这个节点用于配置 所有第三方模块 加载器
    rules: [ // 所有第三方模块的 匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },//配置处理.css文件的第三方loader规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //.less的loader
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' }, // 处理图片文件路径
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, //处理字体文件路径
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              // "@babel/plugin-transform-runtime",
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  }
}