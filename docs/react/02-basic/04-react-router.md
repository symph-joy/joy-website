# React 路由

Joy React 应用是单页面应用(SPA)，单页面应用只在首次加载 HTML 页面框架，而后就由路由模块来切换页面，不同的页面由不同的的组件构成，页面切换也就是切换组件。

> 路由模块底层封装自 [react-router](https://reactrouter.com/)，请跳转到 [react router 官网](https://reactrouter.com/) 了解详细文档。
>
> `@symph/react` 兼容 [react-router](https://reactrouter.com/) 的组件和用法，但推荐使用`@symph/react/router-dom`替换`react-router-dom`，前者包含后者，也方便导入使用，也提供额外的附加能力。

`@symph/react`提供多种注册路由的方式：

- 定义路由组件，注册组件到应用容器，应用自动识别和注册路由。
- 通过`ReactRouterService`服务接口，注册路由信息。
- 使用[`react-router`](https://reactrouter.com/)的`<Routes>`和`<Route>`注册，注册运行时动态路由，动态路由不在`ReactRouterService`服务中注册，所以不能被应用容器控制识别和控制。

## 路由组件

使用`@ReactRoute()`装饰器将`ReactController`组件类申明为路由组件，将路由组件注册到应用容器，当内置的`ReactRouterService`服务识别到路由组件时，将自动解析和注册路由到路由表。

> 在 `@symph/joy` 项目启动时，将自动扫描和注册项目中的所有 ReactRoute 路由， 运行`joy dev`命令，浏览`http://localhost:300/hello` 即可访问到我们的页面。
> 如果单独使用 `@symph/react`，需要开发者负责注册所有的路由组件。

例如创建`src/client/pages/hello.tsx`文件，定义一个路由组件：

```tsx
// src/client/pages/hello.tsx

import React from "react";
import { ReactController, BaseReactController, ReactRoute } from "@symph/react";

@ReactRoute({ path: "/hello" })
@ReactController()
export default class HelloController extends BaseReactController {
  renderView() {
    return <div data-testid="hello">Hello</div>;
  }
}
```

等效于以下路由配置：

```js
[{ exact: true, path: "/hello", componentName: "helloController", componentModule: "src/client/pages/hello.tsx" }]``;
```


### path

Type: `string`， 

路由路径匹配规则，同`react-router` `<Route>`的`path`参数一致， 例如：

- `/users` 静态路由
- `/users/:id` 动态路由，路由参数名称`id`
- `/users/:id/*` 动态全捕获路由，例如匹配 `/user/001/a/b/c`是，得到路由参数 `{id: "001", "*": "/a/b/c""}`

### index

Type: `boolean | undefined`, Default：`false`

是否是 index 缺省路由。

### caseSensitive

Type: `boolean | undefined`, Default：`false`

配置`path`路由规则是否区分字母大小写。
