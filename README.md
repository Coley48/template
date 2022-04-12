# template

该项目是一个 Vue 项目的模板仓库；

### 项目搭建

1. 安装 webpack

```sh
npm i -D webpack webpack-dev-server webpack-cli
```

2. 配置 webpack

在根目录下添加`webpack.dev.js`和`webpack.prod.js`

`webpack.dev.js`用于开发环境，`webpack.prod.js`用于生产环境；

```sh
# 生产环境中使用 babel-loader；
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D @babel/plugin-transform-runtime # async/await

# 根据需要安装其他 loader 和 plugin；
npm i -D style-loader css-loader html-webpack-plugin # vue 项目中 vue-style-loader 替代 style-loader
npm i -D postcss-loader autoprefixer # css 后编译器
npm i -D css-minimizer-webpack-plugin mini-css-extract-plugin # 提取 css
```

- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)

3. 配置 babel

> `Babel` 是一个 JavaScript 编译器，主要用于将采用 `ECMAScript 2015+` 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中；

- [babel配置教程](https://www.babeljs.cn/setup#installation)

4. 最后在 `package.json` 中添加运行脚本

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "webpack server --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
},
```

5. 配置 Vue

安装 vue vue-router vuex
```sh
npm i vue@2 vue-router vuex
```

安装 vue-loader vue-style-loader vue-template-compiler
```sh
npm i -D vue-loader vue-style-loader vue-template-compiler
```

需要注意版本号：
```json
 "vue-loader": "^15.9.6",
 "vue-style-loader": "^4.1.3",
 "vue-template-compiler": "^2.6.14",
```

- [vue 中 CSS 提取](https://vue-loader.vuejs.org/zh/guide/extract-css.html)
- [CssMinimizerWebpackPlugin](https://webpack.docschina.org/plugins/css-minimizer-webpack-plugin/)
- [MiniCssExtractPlugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)