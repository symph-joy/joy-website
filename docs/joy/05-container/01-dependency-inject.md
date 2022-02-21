# 应用容器

容器`ApplicationContext`是整个应用的核心，容器管理应用的所有组件`Component`，负责组件的创建和装配。

`@symph/core` 库提供了应用容器的约定接口 `IApplicationContext` 和基本实现类`ApplicationContext`。

## 依赖注入 Dependency Injection

依赖注入指当一个对象在创建时，由容器将其依赖的其它对象的引用传递给它，是面向对象编程中的一种设计模式，是控制反转（IoC: Inversion of Control）的一种技术实现。
我们只需关注组件内部的功能实现，组件的创建将由容器完成，用来减低代码之间的耦合度，让各个组件能够轻易的组装和替换，方便进行扩展和测试等。

下面以服务端的代码为例，展示依赖注入是如何工作的。
首选创建一个 Service 类。

```ts
// src/server/posts.service.ts

import { Component } from "@symph/core";

@Component()
export class PostsService {
  private readonly posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }
}
```

然后让容器将组件注入到 Controller 类中:

```ts
// src/server/posts.controller.ts

import { Component } from "@symph/core";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }
}
```

最后，注册所有的组件到容器中：

```ts
// src/server/app.ts
import { INestApplication, ServerFactory } from "@symph/server";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";

async function startApp() {
  const app = await ServerFactory.create([PostsService, PostsController]);
  await app.listen(3000);
}
startApp();
```

此时我们运行`ts-node app.ts`，整个应用已能够正常运行。
上面例子有 3 个关键步骤：

1. 在 `posts.service.ts` 中， 使用 `@Component()` 装饰器，声明`PostsService`类是一个可被依赖注入容器管理的组件。
2. 在 `posts.controller.ts`中， 在 `PostsController` 类的构造函数里， 声明其依赖 `PostsService`。
3. 在 `app.ts`中， 创建应用实例并注册组件，然后启动应用。启动的过程中会逐个创建组件实例，下面我们看看如何创建 `PostsController` 实例：
   1. 在依赖注入容器创建 `PostsController` 实例之前，首先检查其依赖的组件，找到了 `PostsService`。
   2. 然后通过类型 `PostsService` 在容器找到了之前注册的 `PostsService` 组件。
   3. 容器将先创建 `PostsService` 的实例（默认为 `SINGTON` 单例模式），缓存和返回该实例，如果缓存已经存在，则直接返回该实例。
   4. 将返回的 `PostsService` 的实例作为 `PostsController`构造函数的参数，创建 `PostsController` 实例。

## 和 Java Spring 的主要区别：

1. Spring 中，容器管理的对象成为 Bean 在 Joy 中我们称为`Component`。
2. JavaScript 没有 Java 包的概念，所以不能通过字符串的类名来指定组件的类型。 且 Joy 组件 `package` 属性，仅用于命名分组，避免命名冲突，不影响通过类型查找组件。
