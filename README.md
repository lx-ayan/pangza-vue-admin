# Pangza Vue Admin
### 介绍
Pangza Vue Admin 是一款基于 Vue、Typescript、Vite、Pinia、TDesign 开源的后台管理模板。使用最新技术开发，并且涵盖本人封装的 TDesign 高级组件，在一定程度上提高了您的开发效率。另外本项目封装了一些指令，hook，动态路由，路由自动注册，权限控制等功能。

### 预览地址
- [预览地址](https://pangzablog.cn:20000/pangzavueadmin) : https://pangzablog.cn:20000/pangzavueadmin

### 项目功能
- 使用 Vue3.4 + TypeScript 开发，单文件组件**＜script setup＞**
- 使用 Pinia 替代 Vuex，轻量、简单、易用，集成 Pinia 持久化插件
- 使用 TypeScript 对 Axios 整个二次封装（请求拦截、取消、常用请求封装…）
- 使用 VueRouter 配置动态路由权限拦截、路由懒加载，支持页面按钮权限控制
- 三种路由自动注册方式

### 项目地址
- github: https://github.com/lx-ayan/pangza-vue-admin
- gitee: https://gitee.com/liu-xu-xu/pangza-vue-admin

### 使用

#### clone
> git clone https://github.com/lx-ayan/pangza-vue-admin.git

#### install
> npm install


#### run dev
> npm run dev

### 项目截图

#### 登录
![login](https://ooo.0x0.ooo/2024/12/22/OETtn1.png)

#### 首页
![login](https://ooo.0x0.ooo/2024/12/22/OET44I.png)

#### CRUD 列表
![login](https://ooo.0x0.ooo/2024/12/22/OETD6D.png)

#### 个人中心
![login](https://ooo.0x0.ooo/2024/12/22/OETLkF.png)

### 目录结构

```
|--.vscode # VSCode相关配置文件夹
|-- public # 公共资源文件夹
|-- src # 项目主要源代码目录
    |-- api # 接口文件夹
    |-- assets # 静态资源文件夹
    |-- common # 通用工具和常量文件夹
    |-- components # Vue组件文件夹
    |-- config # 项目配置文件夹
    |-- directive # 自定义指令文件夹
    |-- hooks # 自定义钩子函数文件夹
    |-- layouts # 页面布局组件文件夹
    |-- plugins # 插件相关文件夹
    |-- router # 路由相关文件夹
    |-- store # 状态管理相关文件夹（如果使用状态管理库）
    |-- utils # 工具函数和实用程序文件夹
    |-- views # 页面级别的Vue组件文件夹
    |-- App.vue # Vue应用程序根组件
    |-- main.ts # 项目主入口文件
    |-- vite - env.d.ts # Vite环境相关类型声明文件
    |-- types # 自定义类型声明文件夹
|-- vite-config # Vite构建工具配置文件夹
    |-- alias # 别名配置文件夹（可能用于路径别名）
    |-- build # 构建相关配置文件夹
    |-- env # 环境配置文件夹
    |-- plugins # 插件配置文件夹
    |-- proxy # 代理配置文件夹
    |-- server # 开发服务器配置文件夹
    |-- index.ts # 可能是Vite配置的主入口文件（TypeScript）
|--.env # 环境变量配置文件
|--.gitignore # Git版本控制忽略文件
|-- index.html # 项目主HTML文件
|-- LICENSE # 项目开源许可证文件
|-- package - lock.json # npm依赖版本锁定文件
|-- package.json # 项目依赖管理文件
|-- postcss.config.cjs # PostCSS配置文件
|-- README.md # 项目说明文档
|-- tailwind.config.js # Tailwind CSS配置文件
|-- tsconfig.json # TypeScript配置文件
|-- tsconfig.node.json # 可能是Node.js环境的TypeScript配置文件
|-- tsconfig.tsbuildinfo # 可能是TypeScript构建信息文件
|-- vite.config.ts # Vite构建工具的TypeScript配置文件
|-- yarn.lock # 如果使用Yarn，这是依赖版本锁定文件
```

## 捐赠
如果你正在使用这个项目或者喜欢这个项目的，可以通过以下方式支持我：

Star、Fork、Watch 一键三连 🚀
通过微信、支付宝一次性捐款 ❤

|                                        微信                                        |                                       支付宝                                       |
| :--------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: |
| <img src="https://ooo.0x0.ooo/2024/12/22/OETEm6.jpg" alt="Alipay QRcode" width=170> | <img src="https://ooo.0x0.ooo/2024/12/22/OETGYP.jpg" alt="Wechat QRcode" width=170> |

### 画饼
- 使用文档正在更新中。。。
- 优化 TDesign-pro-component
- 增加系统监控模块