const path = require('path');
const config = new (require('webpack-chain'))();
config
    .context(path.resolve(__dirname, '.')) // webpack 上下文目录为项目根目录
    .entry('app') // 入口文件名称为 app
    .add('./src/index.js') // 入口文件为 ./src/main.ts
    .end()
    .output
    .path(path.join(__dirname, './dist')) // webpack 输出的目录为根目录的 dist 目录
    .filename('[name].[hash:8].js') // 打包出来的 bundle 名称为 "[name].[hash:8].js"
    .publicPath('/') // publicpath 配置为 "/"
    .end()
    .resolve
    .extensions
    .add('.js')
    .add('.vue') // 配置以 .js 等结尾的文件当模块使用的时候都可以省略后缀
    .end()
    .end()
    .module
    .rule('vue') // vue-loader 相关配置
    .test(/\.vue$/) // 匹配 .vue 文件
    .use('vue-loader')
    .loader('vue-loader')
    .end()
    .end()
    .rule('css') // css-loader 相关配置
    .test(/\.css$/)
    .use('vue-style-loader')
    .loader('vue-style-loader')
    .end()
    .use('css-loader')
    .loader('css-loader')
    .options({
        esModule: false
    })
    .end()
    .end()
    .end()
    .plugin('vue-loader-plugin') // vue-loader 必须要添加 vue-loader-plugin
    .use(require('vue-loader').VueLoaderPlugin, [])
    .end()
    .plugin('html') // 添加 html-webpack-plugin 插件
    .use(require('html-webpack-plugin'), [
        {
            template: path.resolve(__dirname, './src/index.html'), // 指定模版文件
            chunks: ['app'], // 指定需要加载的 chunk
            inject: 'body', // 指定 script 脚本注入的位置为 body
        },
    ])
    .end()
    .devServer
    // .host('0.0.0.0') // 服务器外部可访问
    .disableHostCheck(true) // 关闭白名单校验
    .contentBase(path.resolve(__dirname, './src')) // 设置一个 express 静态目录
    .historyApiFallback({
        disableDotRule: true, // 禁止在链接中使用 "." 符号
        rewrites: [
            { from: /^\/$/, to: '/index.html' }, // 将所有的 404 响应重定向到 index.html 页面
        ],
    })
    .port(8080) // 当前端口号
    .hot(true) // 打开页面热载功能
    .sockPort('location') // 设置成平台自己的端口
    .open(true);
module.exports = config.toConfig();
