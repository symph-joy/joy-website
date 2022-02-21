# Head 组件

内建`Head` React 组件用于向页面的 `head`标签内追加元素，当 React 渲染时遇到 `<Head>`组件，将内部声明的标签追加到`document.head`内。

> `Head`标签可以在React组件树的任何位置，也可以多次出现，后渲染的内容，将会覆盖之前渲染的相同标签。
> 
> 组件卸载时，将卸载组件注册的在`head`中的内容，所以需保证每个页面组件中包含了其所需的所有`head`内容，也请不要在一个页面推测其它页面的需要，声明其它页面的`head`。

下面我们在页面中定义 `tile` 和 `meta` 信息：

```tsx
import React from "react";
import { Head } from "@symph/joy/react";
import { ReactController, BaseReactController } from "@symph/react";

@ReactController()
export class Index extends BaseReactController {
  renderView() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <p>Hello world!</p>
      </div>
    );
  }
}
```

我们可以使用`key`属性来避免重复渲染标签，确保标签只被渲染一次，例如：

```tsx
import React from "react";
import { Head } from "@symph/joy/react";
import { ReactController, BaseReactController } from "@symph/react";

@ReactController()
export class Index extends BaseReactController {
  renderView() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Head>
          <meta property="og:title" content="My new title" key="title" />
        </Head>
        <p>Hello world!</p>
      </div>
    );
  }
}
```

在上例中，只有第二个 `<meta property="og:title" />` 会被渲染。 带有不同 `key` 属性的 `meta` 标签将会被分别分开处理。

`title`、`meta`或者其它类型的标签（如： `script`）需作为`Head`组件的直接子元素，或者被最多一级的`<React.Fragment>`所包围，否则将无法正常收集其中定义的标签。




