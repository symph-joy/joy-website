# Joy React 路由

Joy React 应用是单页面应用(SPA)，单页面应用只在首次加载 HTML 页面框架，而后就由路由模块来切换页面，不同的页面由不同的的组件构成，页面切换也就是组件的切换。

> 路由模块底层封装自 [react router v6](https://reactrouter.com/)，其核心概念和用法可以兼容，我们可以直接采用 react router 官方文档中描述的方法来定义路由。

## @symph/react 路由

请跳转到 [@symph/react 路由](/react/basic/react-router)，查看详细文档。

## 约定式路由

约定式路由也叫文件路由，通过文件名和其目录路径得出路由配置。

Joy 约定存放在`src/client/pages`或者`src/pages`目录中的 ReactController 组件，将会自动注册为路由组件，注意：如果`src/client/pages`存在，就不会解析`src/pages`了。
例如：

```shell
myapp
  src
    client
      pages  # 约定路由根目录
        index.tsx  # 首页
        about.tsx  # 关于页面
```

等效于以下路由配置：

```js
[
  { path: "/", index: true, componentName: "index", componentModule: require("src/client/pages/index") },
  { path: "/about", componentName: "about", componentModule: require("src/client/pages/about") },
];
```

需要注意的是，满足以下任意规则的文件不会被注册为路由：

- 以 . 或 \_ 开头的文件或目录
- 以 test.ts、spec.ts、e2e.ts 结尾的测试文件（适用于 .js、.jsx 和 .tsx 文件）
- components 和 component 目录
- utils 和 util 目录

### 动态路由

约定 `[]` 包裹的文件或文件夹为动态路由，例如：

- src/client/pages/users/[id].tsx 会成为 /users/:id
- src/client/pages/users/[id]/settings.tsx 会成为 /users/:id/settings

### 缺省路由

约定目录中的`index.tsx`(适用于.jsx 文件)命名的文件为目录下的缺省路由， 例如：

- src/client/pages/index.tsx 会成为 `{path: "/", index: true}`。
- src/client/pages/users/index.tsx 会成为 `{path: "/user", index: true}`。
- src/client/pages/users/[id]/index.tsx 会成为 `{path: "/users/:id", index: true}`。

### 嵌套路由

约定目录下有 `_layout.tsx` 时会生成嵌套路由，目录下的其它路由将作为其子路由，`_layout.tsx` 作为父级路由，需要通过 `Outlet` 渲染子路由组件。

例如以下目录结构：

```text
└── pages
    └── users
        ├── _layout.tsx
        ├── index.tsx
        └── list.tsx
```

会生成路由：

```js
[
  {
    path: "/users",
    componentName: "_layout",
    children: [
      { path: "", index: true, componentName: "index" },
      { path: "/list", componentName: "list" },
    ],
  },
];
```

### 全局 Layout

约定 `src/client/pages/_layout.tsx` 为全局路由。

我们可能需要针对不同的页面采用不同的布局，例如登录页面 `/login` 采用简单布局, 我们可以通过`location.pathname`来做区分，例如：

```tsx
// src/client/pages/_layout.tsx

import React from "react";
import { BaseReactController, ReactController } from "@symph/react";
import { Outlet } from "@symph/react/router-dom";

@ReactController()
export default class MainLayout extends BaseReactController {
  renderView(): React.ReactNode {
    if (this.props.locaiton.pathname === '/login') {
      return <SimpleLayout><Outlet /></SimpleLayout>
    }
    
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
  }
}
```

### 404 页面

