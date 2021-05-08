# webpack开发环境
## webpack -D
- webpack
- webpack-cli
- webpack-dev-server
- webpack-chain
- webpack-merge

```
npm install webpack webpack-cli webpack-dev-server -D
npm install webpack-chain -D
npm install webpack-merge -D
```

单独打包：`npx webpack .\src\main.js -o .\dist\bundle.js`

## webpack loader -D
- file-loader 
- url-loader
- css-loader
- postcss-loader
- style-loader

## webpack plugin -D
- html-webpack-plugin
- workbox-webpack-plugin
- optimize-css-assets-webpack-plugin
- mini-css-extract-plugin
- clean-webpack-plugin

## vue -S
- vue
- vuex
- vue-loader
- vue-router
- vue-template-compiler
- vue-style-loader -D

## babel -D
- @babel/core
- @babel/cli
- @babel/preset-env
- babel-loader

```
npm install @babel/core @babel/cli @babel/preset-env -D
npm install babel-loader -D
```

转义输出：`npx babel src --out-dir lib`

## less -D
- less
- less-loader

```
npm install less less-loader -D
```
## other
-http-server -S
- autoprefixer -D

## 错误总结
```
报错：PostCSS plugin autoprefixer requires PostCSS 8.
>>npm install -D autoprefixer@9.0.0
```

# nodejs笔记

### 命令
`process.exit(1)` 1表示非正常结束

`process.kill(process.pid, 'SIGKILL')` 立即终止

`process.kill(process.pid, 'SIGTERM')` 正常终止

`process.env` 获取环境变量

`process.argv`，获取命令行参数，该属性是一个包含所有命令行调用参数的数组。第一个参数是 node 命令的完整路径，第二个参数是正被执行的文件的完整路径，所有其他的参数从第三个位置开始。参数处理库：minimist；


### REPL
Object.+`tab` 查看所有方法和属性名

`_`变量，输出上一次打印的值

```
.help: 显示点命令的帮助。
.editor: 启用编辑器模式，可以轻松地编写多行 JavaScript 代码。当处于此模式时，按下 ctrl-D 可以运行编写的代码。
.break: 当输入多行的表达式时，输入 .break 命令可以中止进一步的输入。相当于按下 ctrl-C。
.clear: 将 REPL 上下文重置为空对象，并清除当前正在输入的任何多行的表达式。
.load: 加载 JavaScript 文件（相对于当前工作目录）。
.save: 将在 REPL 会话中输入的所有内容保存到文件（需指定文件名）。
.exit: 退出 REPL（相当于按下两次 ctrl-C）。
```

# npm

### 下载软件包
`npm install`
-g 全局安装
-S/--save 生产模式安装
-D/--save-dev 开发模式依赖
--production 只安装生产环境依赖

`npm update` 更新软件包

`npm run <command>` 运行package.json/scripts中的脚本

`npm root -g` 查看全局安装位置

`npm list [-g]` 查看所有已安装的npm软件包

`npm list --depth=0` 查看顶层的软件包

`npm list package` 查看指定软件包

`npm install package@x.x.x` 下载指定版本的软件包

`npm view package versions` 查看软件包的历史版本

`npm outdated` 对比新旧版本的软件包

`npm uninstall <package>`卸载软件包


# package.json说明

### 属性及含义
`name`：设置软件包的名称。

`author`：列出软件包的作者名称。

`contributors`：除作者外，该项目可以有一个或多个贡献者。 此属性是列出他们的数组。

`bugs`：链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面。

`homepage`：设置软件包的主页。

`version`：指定软件包的当前版本。x.x.x 分别表示主版本号、次版本号、补丁版本号仅修复缺陷的版本是补丁版本，引入向后兼容的更改的版本是次版本，具有重大更改的是主版本

`license`：指定软件包的许可证。

`keywords`：此属性包含与软件包功能相关的关键字数组。

`description`：此属性包含了对软件包的简短描述。

`repository`：此属性指定了此程序包仓库所在的位置。

`main`：设置软件包的入口点。

`private`：如果设置为 true，则可以防止应用程序/软件包被意外发布到 npm 上。

`scripts`：可以定义一组可以运行的 node 脚本。

`dependencies`：设置作为依赖安装的 npm 软件包的列表。

`devDependencies`：设置作为开发依赖安装的 npm 软件包的列表。

`browserslist`：用于告知要支持哪些浏览器（及其版本）。 Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。


### 软件包版本说明符
```
~: 如果写入的是 〜0.13.0，则只更新补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
^: 如果写入的是 ^0.13.0，则要更新补丁版本和次版本：即 0.13.1、0.14.0、依此类推。
*: 如果写入的是 *，则表示接受所有的更新，包括主版本升级。
>: 接受高于指定版本的任何版本。
>=: 接受等于或高于指定版本的任何版本。
<=: 接受等于或低于指定版本的任何版本。
<: 接受低于指定版本的任何版本。
无符号: 仅接受指定的特定版本。
latest: 使用可用的最新版本。
||: 使用范围组合
```








