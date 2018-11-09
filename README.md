# 基于Vue的图数据库可视化

杭电移动互联实验室可视化项目

## 安装依赖
```shell
$ npm install
```

### 运行
```shell
$ npm run serve
```

### 编译打包
```shell
$ npm run build
```

### 路径说明

* `node_modules` : NPM 安装的包
* `public` : index 入口，以及一些静态文件
* `src` : 主要项目路径
  * `components` : Vue 编写的组件
  * `views` : Vue 编写的页面
  * `App.vue` : Vue 最外层的页面
  * `main.js` : Vue 全局控制
  * `router.js` : Vue 路由编写

## Docker 部署

``` shell
$ npm run build
$ docker build -t docker-vue-alpine .
$ docker run -p 88:80 -d docker-vue-alpine
```

