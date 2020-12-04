# webpack开发环境
## webpack
npm install webpack webpack-cli webpack-dev-server -D
npm install webpack-chain -D
npm install webpack-merge -D

单独打包：npx webpack .\src\main.js -o .\dist\bundle.js

## webpack loader -D
file-loader 
url-loader
css-loader
postcss-loader
style-loader

## webpack plugin -D
html-webpack-plugin
workbox-webpack-plugin
optimize-css-assets-webpack-plugin
mini-css-extract-plugin
clean-webpack-plugin

## vue
vue
vuex
vue-loader
vue-router
vue-template-compiler

vue-style-loader -D

## babel
npm install @babel/core @babel/cli @babel/preset-env -D
npm install babel-loader -D

转义输出：npx babel src --out-dir lib

## less
npm install less less-loader -D

## other
http-server -S
autoprefixer -D

## 错误总结
1. PostCSS plugin autoprefixer requires PostCSS 8.
npm install -D autoprefixer@9.0.0



# git常用命令

### 克隆仓库 `git clone <url>`
```
Cloning into 'git-test'...
remote: Enumerating objects: 15, done.
remote: Counting objects: 100% (15/15), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 15 (delta 3), reused 11 (delta 3), pack-reused 0
Receiving objects: 100% (15/15), done.
Resolving deltas: 100% (3/3), done.
```

### 获取远程更新 `git fetch`
`git fetch origin <BranchName>:<NewBranchName>`
```
From https://github.com/Coley48/git-test
 * [new branch]      dev        -> temp
```

### 比较分支 `git diff <BranchName>`
```
diff --git a/README.md b/README.md
index 10b65fb..18c8c8d 100644
--- a/README.md
+++ b/README.md
@@ -1,36 +1,113 @@
 # git-test

+用于测试git功能

-# git command

-获取
:
```

### 添加文件追踪 `git add`

`git add <FileName>` 添加单个或多个文件
`git add .` 添加所有文件


### 提交文件并添加描述 `git commit -m "some descriptions"`

```
[main 81ff1b6] mod readme.md
 1 file changed, 87 insertions(+), 1 deletion(-)
 rewrite README.md (100%)
 ```

### 推送到远程服务器 `git push`

```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.05 KiB | 76.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Coley48/git-test
   12876d8..81ff1b6  main -> main
```

### 推送分支到远程服务器 `git push --set-upstream origin <BranchName>`
```
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'secondary' on GitHub by visiting:
remote:      https://github.com/Coley48/git-test/pull/new/secondary
remote:
To https://github.com/Coley48/git-test
 * [new branch]      secondary -> secondary
Branch 'secondary' set up to track remote branch 'secondary' from 'origin'.
```


### 查看当前状态 `git status`

```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

### 查看分支列表 `git branch`

```
  test
  dev
* main
```

### 创建分支 `git branch <BranchName>`


### 切换分支 `git checkout <BranchName>`

```
Switched to branch 'main'
M       README.md
Your branch is up to date with 'origin/main'.
```

### 合并分支 `git merge <BranchName>`

```
error: Your local changes to the following files would be overwritten by merge:
        README.md
Please commit your changes or stash them before you merge.
Aborting
Updating 12876d8..a5b0277
```

### 创建并切换到该分支 `git checkout -b <BranchName>`

```
Switched to a new branch 'test'
```

### 删除分支  `git branch -d <BranchName>`

```
Deleted branch test (was 12876d8).
```

### 删除远程分支 `git push origin --delete <BranchName>`

```
To https://github.com/Coley48/git-test
 - [deleted]         secondary
 ```

 ### 拉取更新 `git pull`

 相当于`git fetch` + `git merge`
 ```
 Already up to date.
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


# 杂项
每当事件循环进行一次完整的行程时，我们都将其称为一个滴答。
当将一个函数传给 process.nextTick() 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：process.nextTick(() => {})

作为 setImmediate() 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调。
传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。

setInterval 每 n 毫秒启动一个函数，而无需考虑函数何时完成执行。
setTimeout 在超过限定时间间隔但函数未执行完时，会等待函数执行完成之后才执行。

promise 解决回调地狱的一种方式

Promisifying 的技术能够使用经典的 JavaScript 函数来接受回调并使其返回 promise。
const fs = require('fs')

```
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
```

Error 优先回调（error-first callback）
1.callback 的第一个参数是为 error 而保留的。一旦出现 error，callback(err) 就会被调用。
2.第二个参数（和下一个参数，如果需要的话）用于成功的结果。此时 callback(null, result1, result2…) 就会被调用。


# CommonJS

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










