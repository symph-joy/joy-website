# 导出 React

运行命令：
```shell
$ joy build && joy export 
```

构建产物默认生成到 ./out 下，目录结构类似于：

```shell
./out
  index.html
  404.html
  _joy/ # 包含js、css、json等
```

### 本地验证

使用`http-server`启动本地静态文件服务器

```shell
# 安装 http-server
$ npm i -g http-server

# 启动服务器
$ http-server ./out
```

在浏览器上打开地址：[http://127.0.0.1:8080](http://127.0.0.1:8080), 正常情况下应该是和`yarn dev`开发运行时是一致的。

### 部署

本地验证完成后，将`out`目录部署到服务器上即可。

