# 静态文件服务

## public 目录

Joy 提供静态文件服务，在`public`目录下存放的文件，可通过 `/` URL 前缀的`http`请求访问，例如：

- `myapp/public/favicon.ico` 可通过 URL 地址 `http://localhost:3000/favicon.ico` 访问。
- `myapp/public/img/image-1.png` 可通过 URL 地址 `http://localhost:3000/img/image-1.png` 访问。

`public` 目录中的静态文件，仅在编译阶段处理，在 Joy 应用初始化时加载，不能在运行时动态添加和修改文件。
建议使用第三方存储服务存放文件，例如阿里云和 AWS S3，可少了应用服务器的 CPU 和网络负载，也能动态的维护资源文件。

> 注意： 静态文件的 URL 路径，需避免和 React 应用的页面路径或者 API 路径冲突，如果重复，将优先返回静态文件。

### React 使用静态文件

在 React 应用中，可使用其 URL 加载资源。导出 react 应用时，整个`public`目录也将一起导出。

例如 `public/me.png`，在 React 中访问：

```tsx
function Avator() {
  return <img src={"/me.png"} />;
}
```
