# template
通用的前端开发模板，node+webpack


# nodejs

##立即终止
process.exit(1) 1表示非正常结束
process.kill(process.pid, 'SIGKILL')

##正常终止	
process.kill(process.pid, 'SIGTERM')

##获取环境变量
process.env

##获取命令行参数
process.argv，该属性是一个包含所有命令行调用参数的数组。第一个参数是 node 命令的完整路径，第二个参数是正被执行的文件的完整路径，所有其他的参数从第三个位置开始。参数处理库：minimist；


##
对象.+tab 查看所有方法和属性名

_ 变量，输出上一次打印的值

.help: 显示点命令的帮助。
.editor: 启用编辑器模式，可以轻松地编写多行 JavaScript 代码。当处于此模式时，按下 ctrl-D 可以运行编写的代码。
.break: 当输入多行的表达式时，输入 .break 命令可以中止进一步的输入。相当于按下 ctrl-C。
.clear: 将 REPL 上下文重置为空对象，并清除当前正在输入的任何多行的表达式。
.load: 加载 JavaScript 文件（相对于当前工作目录）。
.save: 将在 REPL 会话中输入的所有内容保存到文件（需指定文件名）。
.exit: 退出 REPL（相当于按下两次 ctrl-C）。


##console格式化输出
%s 会格式化变量为字符串
%d 会格式化变量为数字
%i 会格式化变量为其整数部分
%o 会格式化变量为对象

##元素计数
console.count 方法会对打印的字符串的次数进行计数，并在其旁边打印计数：
console.trace 打印函数的调用堆栈踪迹;
使用 console.time() 和 console.timeEnd() 轻松地计算函数运行所需的时间;
转义序列打印有颜色的字体；console.log('\x1b[33m%s\x1b[0m', '你好')
着色库：Chalk
进度条库：progress
使用 readline 模块接受命令行输入
或者 inquirer 包

使用module.exports 添加公开的属性方法

#npm

##下载软件包
npm install

###生产模式安装
-S/--save 安装并添加条目到 package.json 文件的 dependencies。npm5以上自动完成；
###开发模式安装
-D/--save-dev 安装并添加条目到 package.json 文件的 devDependencies。
--production 只安装生产环境依赖的包

##更新软件包
npm update

##运行脚本
npm run command
command是 package.js 下的script属性内的子属性名

##本地安装
npm install package
软件包会被安装到当前文件树中的 node_modules 子文件夹下。

##全局安装
npm install -g package

开发模式安装
npm install --dev <PACKAGENAME>
npm install -D

查看全局安装位置
npm root -g

执行可运行的软件包
npx package
npx webpack -v 查看版本号

查看所有已安装的npm软件包
npm list
查看全局安装的软件包
npm list -g
查看顶层的软件包
npm list --depth=0

查看指定软件包
npm list package


下载指定版本的软件包
npm install package@x.x.x

查看软件包的历史版本
npm view package versions

对比新旧版本的软件包
npm outdated

全局安装软件包：npm-check-updates
安装：npm install -g npm-check-updates
使用：ncu -u

卸载软件包
npm uninstall package
-S/--save 移除package.js中的引用
-D/--save-dev 移除开发依赖项
-g 全局


一些流行的全局软件包的示例有：
npm
create-react-app
vue-cli
grunt-cli
mocha
react-native-cli
gatsby-cli
forever
nodemon


#package.json

##属性及含义
name：设置软件包的名称。

author：列出软件包的作者名称。

contributors：除作者外，该项目可以有一个或多个贡献者。 此属性是列出他们的数组。

bugs：链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面。

homepage：设置软件包的主页。

version：指定软件包的当前版本。x.x.x 分别表示主版本号、次版本号、补丁版本号仅修复缺陷的版本是补丁版本，引入向后兼容的更改的版本是次版本，具有重大更改的是主版本

license：指定软件包的许可证。

keywords：此属性包含与软件包功能相关的关键字数组。

description：此属性包含了对软件包的简短描述。

repository：此属性指定了此程序包仓库所在的位置。

main：设置软件包的入口点。

private：如果设置为 true，则可以防止应用程序/软件包被意外发布到 npm 上。
scripts：可以定义一组可以运行的 node 脚本。

dependencies：设置作为依赖安装的 npm 软件包的列表。

devDependencies：设置作为开发依赖安装的 npm 软件包的列表。

browserslist：用于告知要支持哪些浏览器（及其版本）。 Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。


##软件包版本说明符
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

每当事件循环进行一次完整的行程时，我们都将其称为一个滴答。
当将一个函数传给 process.nextTick() 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：process.nextTick(() => {})

作为 setImmediate() 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调。
传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。

setInterval 每 n 毫秒启动一个函数，而无需考虑函数何时完成执行。
setTimeout 在超过限定时间间隔但函数未执行完时，会等待函数执行完成之后才执行。

promise 解决回调地狱的一种方式

Promisifying 的技术能够使用经典的 JavaScript 函数来接受回调并使其返回 promise。
const fs = require('fs')

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject (err)  // 调用 `reject` 会导致 promise 失败，无论是否传入错误作为参数，
        return        // 且不再进行下去。
      }
      resolve(data)
    })
  })
}

getFile('/etc/passwd')
.then(data => console.log(data))
.catch(err => console.error(err))

Error 优先回调（error-first callback）
1.callback 的第一个参数是为 error 而保留的。一旦出现 error，callback(err) 就会被调用。
2.第二个参数（和下一个参数，如果需要的话）用于成功的结果。此时 callback(null, result1, result2…) 就会被调用。



#webpack

##安装
npm install webpack -D
npm install webpack-cli -D
npm install webpack-dev-server -D

##webpack打包
npx webpack
npx webpack .\src\main.js -o .\dist\bundle.js

##开启本地服务器
npx webpack-dev-server --open --port 80 --contentBase src --hot


##常用loader
css-loader
style-loader
less-loader
url-loader
file-loader
postcss-loader
sass-loader

##安装babel
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill

##转换js代码
./node_modules/.bin/babel src --out-dir lib
npx babel src --out-dir lib



#CommonJS

模块在第一次加载后会被缓存。 这也意味着（类似其他缓存机制）如果每次调用 require('foo') 都解析到同一文件，则返回相同的对象。

多次调用 require(foo) 不会导致模块的代码被执行多次。 这是一个重要的特性。 借助它, 可以返回“部分完成”的对象，从而允许加载依赖的依赖, 即使它们会导致循环依赖。

如果想要多次执行一个模块，可以导出一个函数，然后调用该函数。


require() 总是会优先加载核心模块。

如果按确切的文件名没有找到模块，则 Node.js 会尝试带上 .js、 .json 或 .node 拓展名再加载。


模块封装器
(function(exports, require, module, __filename, __dirname) {
// 模块的代码实际上在这里
});

__dirname: 当前模块的目录名。 相当于 __filename 的 path.dirname()。
__filename: 当前模块的文件名。 这是当前的模块文件的绝对路径（符号链接会被解析）。
exports: 这是一个对于 module.exports 的更简短的引用形式。
module: 对当前模块的引用, 查看关于 module 对象的章节。 module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容。
require(id): 用于引入模块、 JSON、或本地文件。 可以从 node_modules 引入模块。 
require.cache: 被引入的模块将被缓存在这个对象中。 
require.main: Module 对象，表示当 Node.js 进程启动时加载的入口脚本。










