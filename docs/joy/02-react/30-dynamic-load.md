# 动态按需加载

## 动态加载模块 import()

Joy 支持 ES2020 `import()` 语法，使用它在运行时动态的加载 JavaScript 模块。

我们可以使用动态加载，将我们的应用代码分割为多个代码段，在应用运行时再逐步加载需要的代码段，这可以让浏览器加快应用的启动。

下面例子中，我们使用`fuse.js`来模糊搜索，只在用户输入搜索关键字后，才动态加载`fuse.js`库，然后使用它来搜索。

```tsx
import { useState } from "react";

const names = ["Tim", "Joe", "Bel", "Max", "Lee"];

export default function Page() {
  const [results, setResults] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={async (e) => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import("fuse.js")).default;
          const fuse = new Fuse(names);

          setResults(fuse.search(value));
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
```

## 动态加载 React 组件

使用 `@symph/joy/dynamic` 来动态加载 React 组件，它首先创建一个容器组件，在 React 组件树中使用容器组件替代目标，只当容器组件被渲染时，容器组件才会动态加载目标组件，加载完成后展示目标组件。

容器组件提供加载动画、加载失败重试和错误展示的能力，它也支持服务端渲染，即服务端渲染时，动态加载的组件也能想其它组件一样同步渲染。

下面的例子中展示了如何动态加载和使用 `../components/hello` 组件。

```tsx
import dynamic from "@symph/joy/dynamic";

const DynamicComponent = dynamic(() => import("../components/hello"));

function Home() {
  return (
    <div>
      <p>HOME PAGE</p>
      <DynamicComponent />
    </div>
  );
}

export default Home;
```

> 在 `import('path/to/component')` 中， `path/to/component` 指定需动态加载组件的代码路径，该路径只能是明确的路径字符串，不能是变量或者字符串模板。
> 此外，`import()`必须在`dynamic()`中调用，以便在服务端渲染时，能够在 Webpack 的输出 bundles 中查找包含该动态加载模块的 bundle，并在浏览器渲染之前预加载它们。
> `dynamic()` 不能在 React 渲染中使用，因为它需要在模块的顶层进行标记，才能进行预加载，类似于`React.lazy`。

如果按需动态加载的 React 组件在 JS 文件中不是 default 方式导出，而是命名的导出，我们可以在 `import()` 的结果`Promise`中取导出的命名值。
例如动态加载的组件导出名称为`Hello` 时:

```ts
export function Hello() {
  return <p>Hello!</p>;
}
```

引用模块和使用导出的组件：

```ts
const DynamicComponent = dynamic(() => import("../components/hello").then((md) => md.Hello));
```

### 加载动画和状态

`dynamic()` 方法支持 `loading` 可选选项，用于渲染加载中的动画，或者加载失败的状态。
例如：

```tsx
import dynamic from "@symph/joy/dynamic";
import { DynamicLoadingComponentProps } from "@symph/joy/react";

function LoadingComp({ error, isLoading, pastDelay }: DynamicLoadingComponentProps) {
  if (error) return `error`;
  if (pastDelay && isLoading) return "...";
}

const DynamicComponentWithCustomLoading = dynamic(() => import("../components/hello"), { loading: LoadingComp });

function Home() {
  return (
    <div>
      <p>HOME PAGE</p>
      <DynamicComponentWithCustomLoading />
    </div>
  );
}

export default Home;
```

### 动态加载关闭 SSR

有时候我们想为动态加载的组件关闭服务端渲染，只在浏览器上运行该组件。 我们可以设置 `ssr` 属性为 false：

```tsx
import dynamic from "@symph/joy/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/hello"), { ssr: false });

function Home() {
  return (
    <div>
      <p>HOME PAGE</p>
      <DynamicComponentWithNoSSR />
    </div>
  );
}

export default Home;
```

### 动态加载使用 suspense

类似 React 18 的 `React.lazy` 和 `<Suspense>`, 使用 `suspense` 参数来延迟懒加载组件。注意这暂时只能在服务端或者客户端的 `fallback`模式下有效。

```tsx
import dynamic from "@symph/joy/dynamic";

const DynamicLazyComponent = dynamic(() => import("../components/hello"), { suspense: true });

function Home() {
  return (
    <div>
      <p>HOME PAGE</p>
      <Suspense fallback={`loading`}>
        <DynamicLazyComponent />
      </Suspense>
    </div>
  );
}

export default Home;
```

## 动态加载 Joy 路由组件

动态加载路由组件，指只有渲染该路由页面时，才会加载该路由组件相关联的代码模块。
我们可以直接使用 `@ReactDynamicLoad(options )` 装饰器将 `@ReactRoute` 路由组件模块声明为动态加载模块。
动态加载的路由组件也支持服务端渲染，和 `@symph/joy/dynamic` 的参数列表类似，我们也可以为动态路由组件设置加载参数，例如：

```tsx
import React, { ReactNode } from "react";
import { BaseReactController, ReactController, ReactRoute } from "@symph/react";
import { ReactDynamicLoad } from "@symph/joy/react";

@ReactDynamicLoad({ delay: 200, timeout: 1000 })
@ReactRoute({ path: "/about" })
@ReactController()
export class AboutPage extends BaseReactController {
  renderView(): ReactNode {
    return <div>AboutPage</div>;
  }
}
```

`@ReactDynamicLoad` 支持可选的参数有：

- loading: `string` 加载动画组件的组件名称。
- delay: `number`, 默认值 `200`，表示如果在 200 毫秒内加载完成，就不用展示加载动画。这可以减少短时间内的界面切换给用户带来的困扰，让页面看起来加载的更快。
- timeout: `number` 设置加载的超时时间。

### 路由加载动画

和`@symph/joy/dynamic`不一样的是，`loading` 参数只能设置加载动画组件的组件字符串名称，而不是具体的加载组件。
因为要保证加载路由组件之前 Loading 组件已经存在，才能在加载时展现加载动画，同时还得要确保 Loading 模块和路由模块之间没有静态的依赖关系，webpack 才不会将两者打包到一起。
所以需使用字符串的组件名来指向当前运行时已经存在的组件名称。

我们可以在上层路由或者根路由文件模块导出 Loading 组件，来确保在动态路由模块加载之前，应用上下文中已经注册了 Loading 组件。
例如在根布局路由中：

```tsx
// src/client/pages/_layout.tsx

/**
 * 根路由组件
 */
import React, { ReactNode } from "react";
import { BaseReactController, ReactController, ReactRouteContainer } from "@symph/react";
import { Outlet } from "react-router-dom";
import { LoadableLoadingComponentProps } from "@symph/joy/react";

@ReactRouteContainer({ path: "/" })
@ReactController()
export class Rootlayout extends BaseReactController {
  renderView(): ReactNode {
    return (
      <>
        <Head>Hello</Head>
        <Outlet />
      </>
    );
  }
}

/**
 * 自定义的加载动画组件
 */
@ReactController()
export class DynamicLoading extends BaseReactController<LoadableLoadingComponentProps> {
  renderView(): ReactNode {
    return (
      <>
        <div id="loadingMsg">Custom loading...</div>
      </>
    );
  }
}
```

然后在申明动态加载路由组件时，设置加载中动画组件。

```tsx
import React, { ReactNode } from "react";
import { BaseReactController, ReactController, ReactRoute } from "@symph/react";
import { ReactDynamicLoad } from "@symph/joy/react";

@ReactDynamicLoad({ loading: "dynamicLoading" }) 
@ReactRoute({ path: "/about" })
@ReactController()
export class DynamicAboutPage extends BaseReactController {
  renderView(): ReactNode {
    return <div>This is dynamic load about page.</div>;
  }
}
```
