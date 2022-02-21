# 组件

我们可以将一个类，一个常量值或者一个工厂方法注册为组件，一个组件有以自己的名称和类型，当需要它时，我们可以通过其名称或者类型获取到它的值。

## 基本属性

以下列举了一个组件的基本属性和作用。

#### name

Type: `string | symbol | undefined`

组件名称，可以通过名称找到组件。 即依赖注入时，我们可以通过类型注入，也能够通过名称注入。
在同一个 `package` 下， 相同名称的组件，如果类型兼容，后注册的将替换之前注册的组件。

在声明类组件是，如果没有指定名称，将默认通过类名生成名称，生成规则：类名首字母小写，例如：`PostsService`类生成的 组件名称为 `postsService`。

#### package

Type: `string | undefined`

为 `undefined` 时， 默认为全局组件。

组件所在包名，仅用于对容器中的组件进行命名分组，相同 `package` 的组件将分内一个组， 组内是一个独立的命名空间，即同一组内的不同组件的 `name` 冲突，不同组内可以有同名的组件。
组件创建时，如果有通过名称注入的依赖， 将优先在组内查找同名的组件，未找到再在全局公开组件中查找。

> `package` 只有在通过名称注入时有效，通过类型注入不受此影响，如果要限制通过类型注入，请在模块内限制 `export` 导出的类型，防止被外部访问。

#### global

Type: `bool | undefined`, Default: `false`

为 `true` 表示这是公开全局公开命名组件， 能够被所有的其它组件访问。
需注意，全局组件的 `name` 可能冲突，我们在开发一个独立模块是，其公开组件建议采用可区分模块的命名方式，例如 Joy 提供的数据获取组件名为 `joyFectchService`，添加 `joy` 前缀来区分.

当值为 `false`时， 表示为组内非公开组件，只有在同一个组内才能通过名称访问到。

#### scope

Type: `Scope`, Default: `Scope.SINGLETON`

组件的被注入时的生命周期：

- `Scope.SINGLETON` 单例模式，每次获取该组件的实例，获取的是同一个实例，当多个依赖它的组件创建时，注入过去的是同一个实例。
- `Scope.PROTOTYPE` 多例模式，每次获取该组件的实例，获取的是 **不同** 实例， 当多个依赖它的组件创建时，注入过去的是 **不同** 实例。
- `Scope.REQUEST` 用在服务端请求到来时，为每个请求创建对应的实例，在同一个请求过程中，不会重复创建。

#### alias

Type: `string[]|undefined`, Default: undefined

组件的别名，组件名称不可以重复，但是别名可以重复， 后注册的同别名组件，将优先使用。

## 类组件

### 类组件装饰器 @Component

声明类组件可以通过`@Component(ComponentOptions)`装饰器和自定义组件属性两种方式。

通过 `@Component(ComponentOptions)`装饰器将一个类直接声明为组件，然后直接注册该类到容器中。

> 在`@symph/joy`应用中，应用启动时会自动扫描和注册工程里的所有组件。如果我们单独使用容器`ApplicationContext`，需调用`registerModule`方法注册组件到容器中。

下面我们再次看一下 `PostsService` 组件，并注册到普通容器中：

```ts
import { Component, Scope, ApplicationContext } from "@symph/core";

@Component({ name: "postService", scope: Scope.SINGLETON })
export class PostsService {
  private readonly posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }
}

const app = new ApplicationContext();
app.registerModule([PostsService]); // 注册
```

`ComponentOptions` 装饰参数，除了可以设置组件的基本属性，还包含以下类组件特有的属性：

##### lazyRegister

Type: `bool|undefined`, Default: `false`

延迟注册组件，在应用启动时不注册组件，在应用运行的过程中，遇到通过类型注入，且注入的类标记为可延迟注册，则此时将该类作为组件注册到容器中，然后创建并返回该类的实例。

> 目前主要在 React 应用容器中使用该特性，用于动态的加载界面和其依赖，`@ReactComponent()` 也默认开启了该属性。

### 自定义类组件 useClass 

第二中方式，是通过自定义属性的方式注册组件, 下面例子和装饰器方式注册的效果一样。

```ts
import { Scope, ApplicationContext } from "@symph/core";

export class PostsService {
  private readonly posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }
}

const app = new ApplicationContext();
app.registerModule([
  {
    name: "postsService",
    socpe: Scope.SINGLETON,
    useClass: PostsService,
  },
]); // 注册
```

### 依赖声明和注入 @Inject()

`@Inject<T>(typeOrName?: string | symbol | Type<T>) {)` 装饰器在类的构造方法或属性上声明一个外部依赖。

> 在面向对象编程里，强依赖建议采用构造方法注入，弱依赖采用属性注入。

#### 构造方法依赖注入

类构造方法的每个入参都声明了一个外部依赖，组件在创建之前，容器会逐个创建这些依赖，然后作为参数调用构造函数创建组件实例。
入参上可以省略 `@Inject()` 装饰，默认采用类型注入。

```ts
import { Inject, Component } from "@symph/core";

@Component()
class PostsService {
  constructor(
    private databaseConnection: DatabaseConnection, // 注入 PostsService 类型的组件。
    
    @Inject("configService")
    private configService: ConfigService // 注入名称为 configService 的组件。
  ) {}
}
```

#### 属性依赖注入

类声明的属性上，使用`@Inject()`装饰器声明这个是一个需依赖注入的属性.

```ts
import { Inject,Component } from "@symph/core";

@Component()
class PostsService {
  @Inject()
  private logService: LogService;
}
```

## 值组件 useValue

常量值也可以注册为组件，例如注册外部库到容器中，或者使用 Mock 值替换真实值等，下面我们为了测试，使用 mock 的`PostsService`替换真实的值。

```ts
import { INestApplication, ServerFactory } from "@symph/server";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";

const mockPostsService = {
  /**
   * mock 功能
   */
};

async function startApp() {
  const app = await ServerFactory.create([
    {
      name: "postsService",
      type: PostsService,
      useValue: mockPostsService,
    },
    PostsController,
  ]);
  await app.listen(3000);
}
startApp();
```

上例中，通过`PostsService`类型注入或者 `postsService`名字注入的地方，都将强制注入`mockPostsService`常量值。虽然是常量值，我们依然可以为组件设置`name`和`type`，用于在注入匹配组件。

## 工厂组件 useFactory

使用`useFactory`定义产生组件值得工厂方法，允许我们动态的创建组件。
工厂方法可以使用容器中的其它的组件，`inject` 属性接受一个依赖的其它组件数组，该数组的顺序和工厂方法的入参顺序需一直，下看一个代码片段：使用配置动态创建数据库连接.

```ts
ServerFactory.create([
  {
    name: "databaseConnection",
    useFactory: (configService: ConfigService) => {
      const dbOptions = configService.get("dbOptions");
      return new DatabaseConnection(dbOptions);
    },
    inject: [ConfigService], // 通过类型注入配置管理服务
    scope: Scope.SINGLETON
  },
]);
```

## 注册组件

我们可以在应用容器初始化之前注册组件，也可以在运行过程中加载组件。
注册组件时，有已下几种数据结构可以作为参数传入，容器会自动识别这些数据结构得到里面的组件配置。

1. 被 `@Component()` 装饰的组件类。
2. 自定义的类组件、值组件和工厂组件。
3. 被`@Configuration()`装饰的配置类。
4. 包含以上 3 中结构的对象，例如`import`一个模块后，直接扫描整个模块导出的内容。
5. 以上结构组成的数组。

容器初始化之前注册的组件，能够在容器初始化时，第一时间扫描内部所有的组件，进行组件识别和初始化，例如识别所有的 Controller 组件，得到应用的路由信息。
容器初始化之前，可以在一下 2 个地方注册组件：

1. 在创建应用容器实例时，将组件列表作为容器的构造参数传入。
2. 使用`registerModule(module)`方法注册组件。

```ts
// 1. 作为容器的构成参数传入
const applicationContext = new ApplicationContext(components);

// 2. 调用注册方法注册
applicationContext.registerModule(extraComponents);
```

应用运行时，调用 `loadModule(module)`方法动态加载组件，组件注册完成后，立即执行组件初始化。
需注意：不允许重复注册同名且已经创建过实例的组件，动态注册将会报错中断，因为这会让应用导致无法预测的错误。

## 获取组件值

有以下 2 个方法可以容器中组件的值：

```ts
interface IApplicationContext {
  /**
   * 获取组件值
   * @param typeOrName 组件类型或名称
   */
  get<TInput = any>(typeOrName: TypeOrTokenType<TInput>): Promise<TInput> | TInput;

  /**
   * 获取组件值，如果组件不存在，返回null。
   * @param typeOrName 组件类型或名称
   */
  getOptional<TInput = any>(typeOrName: TypeOrTokenType<TInput>): Promise<TInput> | TInput | undefined;
}
```

如果组件时异步组件，返回的 `Promise<Input>`，什么是异步组件？

1. 异步工厂方法定义的组件。
2. 组件的 initialize 方法返回的 promise。
3. 组件的依赖中有异步组件。

当我们确定组件是非异步组件，且不想中断当前执行流程的时候，可以强制使用同步方式获取组件值。例如在 React 的渲染过程中，我们会尽力采用同步方式使用组件，避免打断渲染流程，减少不必要的重复渲染。

```ts
interface IApplicationContext {
  /**
   * 同步获取组件值，如果组件是异步组件，将会抛出异常。
   *  @param typeOrName 组件类型或名称
   */
  getSync<TInput = any>(typeOrName: TypeOrTokenType<TInput>): TInput;

  /**
   * 同步获取组件值，如果组件不存在，返回null，如果组件是异步组件，将会抛出异常。
   * @param typeOrName 组件类型或名称
   */
  getOptionalSync<TInput = any>(typeOrName: TypeOrTokenType<TInput>): TInput | undefined;
}
```

