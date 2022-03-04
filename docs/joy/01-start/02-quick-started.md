# 快速开始

Joy 支持 React、Node.js 或者前后端混合应用开发，这里以一个简单的包含前后端的`Hello World`应用为例，介绍如何快速开始开发。

## 环境准备

- node 建议 12.13.0 或以上版本，推荐使用 nvm 来管理 node 版本。

- 推荐使用 yarn 管理依赖，国内使用 [阿里 npm 源](https://npmmirror.com/) registry: https://registry.npm.taobao.org

```shell
# 安装 yarn
$ npm i yarn -g
# 手动设置`registry`地址为国内源
$ yarn config set registry https://registry.npm.taobao.org
# 查看源
$ yarn config get registry

# 或者使用 tyarn
$ npm i yarn tyarn -g
# 后面文档里的 yarn 换成 tyarn
$ tyarn -v
```

## 创建目录

创建应用根目录

```shell
$ mkdir myapp && cd myapp
```

- 创建 package.json 文件， 申明应用名和依赖：

```json
{
  "name": "myapp",
  "version": "v1.0.0",
  "scripts": {
    "dev": "joy dev",
    "build": "joy build",
    "start": "joy start"
  },
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "@symph/joy": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^17.0.1",
    "@types/react-dom": "^17.0.1"
  }
}
```

## 安装依赖

```shell
$ yarn install
```

## 第一个页面

### React 客户端

#### 创建 Model

创建文件 `src/client/model/hello.model.ts`, ReactModel 管理应用状态数据和封装业务方法。

```ts
// src/client/model/hello.model.ts
import { ReactModel, BaseReactModel } from "@symph/react";
import { Inject } from "@symph/core";
import { ReactFetchService } from "@symph/joy";

@ReactModel()
export class HelloModel extends BaseReactModel<{
  message: string;
}> {
  constructor(@Inject("joyFetchService") private joyFetchService: ReactFetchService) {
    super();
  }

  getInitState() {
    return { message: "Hello World!" }; // Init model state
  }

  async fetchMessage() {
    const resp = await this.joyFetchService.fetchApi("/hello");
    const message = await resp.text();
    this.setState({ message }); // Update model state
  }
}
```

#### 创建页面

- 创建第一个页面`src/client/pages/index.tsx`，页面 ReactController 负责展示 Model 中的状态，响应用户交互，触发业务流程。

```tsx
// src/client/pages/index.tsx
import React, { ReactNode } from "react";
import { BaseReactController, ReactController } from "@symph/react";
import { Inject } from "@symph/core";
import { HelloModel } from "../model/hello.model";

@ReactController()
export default class IndexController extends BaseReactController {
  @Inject()
  helloModel: HelloModel;

  renderView(): ReactNode {
    const { message } = this.helloModel.state;
    return (
      <div>
        <div id="message">{message}</div>
        <button id="btnUpdateMessage" onClick={() => this.helloModel.fetchMessage()}>
          Update Message
        </button>
      </div>
    );
  }
}
```

### Server 服务端

#### 创建 Api Controller

创建文件 `server/controller/hello.controller.ts`, Server Controller 对外提供 HTTP 接口服务。

```ts
// server/controller/hello.controller.ts
import { Controller, Get } from "@symph/server";

@Controller()
export class HelloController {
  @Get("/hello")
  hello(): string {
    return "Hello Joy!";
  }
}
```

服务启动后，可通过 `http://localhost:3000/api/hello` 访问该接口。

## 启动开发服务器

```shell
$ yarn dev
```

当命令行输出`ready - started server on http://localhost:3000`时，开发服务器启动成功，打开浏览器输入地址 `http://localhost:3000`，即可看到我们的第一个页面`Hello Joy!`。

> 热更新：此时可尝试修改页面内容，当保存后，浏览器界面将自动更新为新内容。

## 部署发布

### 构建

```shell
$ yarn run build
```

执行 `joy build` 命令将在 `.joy` 文件夹中构建出用于生产环境的应用程序。

### 运行应用

```shell
$ yarn run start
```

构建完成后执行 `joy start`命令，将启动一个 Node.js 服务程序，该服务对外提供 HTTP API 接口服务，以及渲染 React 页面。

### 导出静态HTML

将React应用导出为静态HTML，可使其独立运行和部署。

例如当我们开发一个单纯的React应用，业务接口由服务端团队提供，也不需要服务端渲染时，可以考虑将React应用导出，然后部署到Nginx静态资源服务器上。

如果想将 `@symph/joy` 应用程序导出为静态 HTML，请参照 导出文档 中的说明进行操作。
