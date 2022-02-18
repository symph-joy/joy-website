# 配置类

## @Configuration 装饰器

配置类用于配置组件，可将一个模块的多个组件统一放在一个配置类里配置，而后只需注册配置类到容器。我们也可以使用继承等方式，扩展和定制配置类。

使用 `@Configuration()` 装饰器，将一个类声明为配置类，在配置类的属性或方法上，使用 `Configuration.Component(options: ComponentOptions)` 声明一个组件，组件名称如果未设置，将默认采用属性名或方法名。
参照比上面 [组件](#组件) 章节中的例子，下面我们看看如何使用配置类配置组件：

```ts
import { Configuration, Scope } from "@symph/core";
import { ConfigService } from "@symph/config";

@Configuration()
class PostConfiguration {
  constructor(private configService: ConfigService) {}

  // 使用工厂方法定义组件
  @Configuration.Component({ scope: Scope.SINGLETON })
  public databaseConnection(): DatabaseConnection {
    const dbOptions = this.configService.get("dbOptions");
    return new DatabaseConnection(dbOptions);
  }

  // 快捷声明类组件
  @Configuration.Component()
  public postsService: PostsService;

  @Configuration.Component()
  public postsController: PostsController;
}

// 注册组件和启动应用。
async function startApp() {
  const app = await ServerFactory.create(PostConfiguration);
  await app.listen(3000);
}
startApp();
```

配置类在容器中，其本身也是一个类组件，可以轻松的使用其它组件，例上例中，`PostConfiguration` 依赖 ` configService`组件来获取数据库连接配置。
