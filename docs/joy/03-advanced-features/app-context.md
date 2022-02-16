# 应用容器

容器`ApplicationContext`是整个应用的核心，容器管理应的用所有组件`Component`，负责组件的创建和装配。

`@symph/core` 库提供了应用容器的约定接口 `IApplicationContext` 和基本实现类`ApplicationContext`。

## DI 依赖注入

依赖注入是面向对象编程中的一种设计模式，是控制反转（IoC: Inversion of Control）的一种技术实现，用来减低代码之间的耦合度。
通过依赖注入，当一个对象在创建时，由容器将其依赖的其它对象的引用传递给它。

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

async function runApp() {
  const app = await ServerFactory.create([PostsService, PostsController]);
  await app.listen(3000);
}
runApp();
```

此时我们运行`ts-node app.ts`，整个应用将能够正常运行。
上面例子有 3 个关键步骤：

1. 在 `posts.service.ts` 中， 使用 `@Component()` 装饰器，声明`PostsService`类是一个可被依赖注入容器管理的组件。
2. 在 `posts.controller.ts`中， 在 `PostsController` 类的构造函数里， 声明其依赖 `PostsService`。
3. 在 `app.ts`中， 创建应用和注册组件，启动应用时创建组件实例，看看如何创建 `PostsController` 实例？
   1. 在依赖注入容器创建 `PostsController` 实例之前，首先检查其依赖的组件，找到了 `PostsService`。
   2. 然后通过类型 `PostsService` 在容器找到了之前注册的 `PostsService` 组件。
   3. 容器将先创建 `PostsService` 的实例（默认为 `SINGTON` 单例模式），缓存和返回该实例，如果缓存已经存在，则直接返回该实例。
   4. 将返回的 `PostsService` 的实例作为 `PostsController`构造函数的参数，创建 `PostsController` 实例。

上例是一个非常简单的依赖注入例子， 在实际应用开发中，依赖关系树往往复杂得多，在依赖注入容器的帮助下，我们只需关注组件内部的功能实现，组件的创建将有容器完成，这也让各个组件能够轻易的组装和替换，方便对单个组件进行扩展和测试等。

## Component 组件

### 类组件

通过 `@Component(ComponentOptions)`装饰器将一个类声明为可被依赖注入容器管理的组件，类组件支持定制参数 `ComponentOptions`，
下面我们再次看一下 `PostsService` 组件：

```ts
// src/server/posts.service.ts

import { Component, Scope } from "@symph/core";

@Component({ name: "postService", scope: Scope.SINGLETON })
export class PostsService {
  private readonly posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }
}
```

`ComponentOptions` 参数说明：

#### name

Type: string | symbol | undefined

如果为 `undefined`， 将默认通过类名生成名称，生成规则：类名首字母小写，例如：`PostsService`类生成的 组件名称为 `postsService`。

组件名称，可以通过名称找到组件。 即依赖注入时，我们可以通过类型注入，也能够通过名称注入。
在同一个 `package` 下， 相同名称的组件，如果类型兼容，后注册的将替换之前注册的组件。

#### package

Type: string | undefined

为 `undefined` 时， 默认为全局组件。

组件所在包名，仅用于对容器中的组件进行命名分组，相同 `package` 的组件将分内一个组， 组内是一个独立的命名空间，即同一组内的不同组件的 `name` 冲突，不同组内可以有同名的组件。

组件创建时，如果有通过名称注入的依赖， 将优先在组内查找同名的组件，未找到再在全局公开组件中查找。

> `package` 只有在通过名称注入时有效，通过类型注入不受此影响，如果要限制通过类型注入，请在模块内限制 `export` 导出的类型，防止被外部访问。

#### global

Type: bool | undefined, Default: false

为 `true` 表示这是公开全局公开命名组件， 能够被所有的其它组件访问。

需注意，全局组件的 `name` 可能冲突，我们在开发一个独立模块是，其公开组件建议采用可区分模块的命名方式，例如 Joy 提供的数据获取组件名为 `joyFectchService`，添加 `joy` 前缀来区分.

当值为 `false`时， 表示为组内非公开组件，只有在同一个组内才能通过名称访问到。

#### scope

Type: Scope, Default: Scope.SINGLETON

组件的被注入时的生命周期：

- `Scope.SINGLETON` 单例模式，每次获取该组件的实例，获取的是同一个实例，当多个依赖它的组件创建时，注入过去的是同一个实例。
- `Scope.PROTOTYPE` 多例模式，每次获取该组件的实例，获取的是 **不同** 实例， 当多个依赖它的组件创建时，注入过去的是**不同**实例。
- `Scope.REQUEST` 用在服务端请求到来时，为每个请求创建对应的实例，在同一个请求过程中，不会重复创建。

#### alias

Type: `string[]|undefined`, Default: undefined

组件别名，组件名称不可以重复，但是别名可以重复， 后注册的同别名组件，将优先使用。

#### lazyRegister

Type: `bool|undefined`, Default: `false`

延迟注册组件，在应用启动时不注册组件，在应用运行的过程中，遇到通过类型注入，且注入的类标记为可延迟注册，则此时将该类作为组件注册到容器中，然后创建并返回该类的实例。

> 目前主要在 React 应用容器中使用该特性，用于动态的加载界面和其依赖，`@ReactComponent()` 也默认开启了该属性。

### 常量值组件

常量值也可以注册为组件，例如注册外部库到容器中，或者使用Mock值替换真实值等，下面我们使用mock的`PostsService`替换真实的值，用于测试。

```ts
import { INestApplication, ServerFactory } from "@symph/server";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";

const mockPostsService = {
  /**
   * mock 实现
   */
}

async function runApp() {
  const app = await ServerFactory.create([{
    name: 'postsService',
    type: PostsService,
    useValue: mockPostsService,
  }, PostsController]);
  await app.listen(3000);
}
runApp();

```







## 和 Java Spring 的主要区别：

1. Spring 中，容器管理的对象成为 Bean 在 Joy 中我们成为`Component`。
2. JavaScript 没有 Java 包的概念， 所以不能通过字符串的类名来指定类。 symph 组件 `package` 属性，仅用于命名分组，避免命名冲突，不影响通过类型查找组件。
3. 支持在运行时，按需注册 在 ReactApplicationContext 中，
