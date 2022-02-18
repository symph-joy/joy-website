# React 约定路由

> 这篇文章只介绍如何使用约定路由，如果查看 `@symph/react` 路由的详细文档， 点击跳转到 [`@symph/react` React 路由](/react/basic/react-router)。

约定式路由也称为文件路由，按照约定的目录路径和文件名，转为为路由信息。

Joy 约定存放在`src/client/pages`或者`src/pages`目录中的 ReactController 组件，将会自动注册为路由组件，注意：如果`src/client/pages`存在，就不会解析`src/pages`了。 例如：

```text
src
└── client
    └── pages  # 约定路由根目录
        ├── index.tsx  # 首页
        └── about.tsx  # 关于页面
    ```

等效于以下路由配置：

```js
[
  {
    path: "/",
    index: true,
    componentName: "index",
    componentModule: require("src/client/pages/index"),
  },
  {
    path: "/about",
    componentName: "about",
    componentModule: require("src/client/pages/about"),
  },
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
      {
        path: "",
        index: true,
        componentName: "index",
      },
      {
        path: "/list",
        componentName: "list",
      },
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
    if (this.props.locaiton.pathname === "/login") {
      return (
        <SimpleLayout>
          <Outlet />
        </SimpleLayout>
      );
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

### 错误页面

当在服务端或者浏览器运行时，出现未捕获的异常，导致应用无法正常继续运行，将显示错误页面，展示错误代码和错误提示信息。

如果项目中没有自定义错误页面，会默认使用 `import { ErrorComponent } from "@symph/joy/react"`组件，我们也可以继承该默认错误组件，自定义错误界面。

约定 `src/client/pages/_error.tsx` 为自定义错误页面，注意：错误组件是简单展示组件，只能使用`props`渲染界面。

```tsx
import React from "react";
import { ErrorComponent } from "@symph/joy/react";

export default class MyError extends ErrorComponent {
  renderView({ statusCode, title }: { statusCode: string; title: string }) {
    return (
      <>
        <h1>My Custom Error Page</h1>
        <p>
          {statusCode}|{title}
        </p>
      </>
    );
  }
}
```

### 404 页面

`/404` 路由为特殊路由，渲染时如果未在注册的所有路由中匹配到页面，Joy 将渲染 404 组件。

如果项目中没有自定义 404 页面，会使用默认的 `import { ErrorComponent } from "@symph/joy/react"` 组件。

约定`src/client/pages/404.tsx` 为 `/404` 页面。

```tsx
import React from "react";
import { BaseReactController, ReactController, ReactRoute } from "@symph/react";

@ReactRoute({ path: "/404" })
@ReactController()
export default class My404Page extends BaseReactController {
  renderView() {
    return <div id={"title"}>Custom 404</div>;
  }
}
```
