# 使用图片

## 静态导入

Joy 应用中可以直接静态导入图片模块， 支持的图片格式有: `png|jpg|jpeg|gif|webp|avif|ico|bmp|svg`。

下面例子中，我们导入图片，并设置给 `img` 标签来展示图片:

```tsx
import imgMe from "./me.png";
// or const imgMe = require("./me.png")

function Avator() {
  return <img src={imgMe.src} width={imgMe.width} height={imgMe.heigh} />;
}
```

导入的变量类型为`StaticImageData`，包含加载地址和大小等信息：

```ts
interface StaticImageData {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
}
```

- **src** Type: string, 图片加载在线地址，类似： `/_joy/static/media/xxxx.png`。
- **width** Type: number, 图片的宽度，单位像素。
- **height** Type: number, 图片的高度，单位像素。
- **blurDataURL** Type: string, 图片预览图，默认为 `8 * 8`像素的缩略图，生产模式打包时值为 Base64 的 DataUrl， 开发模式时值为缩略的在线生成地址。

## CSS 中使用图片

```css
.logo {
  background: url("./logo.png");
}
``` 

## 引用静态文件图片

Joy 提供内建静态文件服务，将图片放入项目的`public`目录下，即可通过URL路径访问该图片。

例如： 我们将图片放入 `public/logo.png` 路径下，在`img`标签里引用该图片。

```tsx
  return <img src="/logo.png" />;
```


## Image 组件和图片优化

Joy `Image` 组件是 HTML `<img>` 标签的扩展， 它集成了一系列的性能优化操作，为应用提供更好的用户体验。

一些内建的优化操作有：

- 提升加载性能： 在不同的设备上，自动加载适应屏幕尺寸的图片，并使用优化的图片格式，例如 `webp`。
- 防止累积布局偏移：固定图片布局，防止图片在加载过程中导致界面布局跳动。
- 加快页面加载：图片仅在它可见是才加载，在加载之前，也可展示模糊的缩略图。
- 灵活提供图片资源：服务端实时的提供各种尺寸和格式的图片，即使图片存储在远程的服务器上。

### 使用本地图片

使用本地图片，首先使用相对地址导入图片，然后赋值给 `Image` 组件的`src`属性。 本地图片在导入时，Joy 会检查其高宽，自动设置 `width` 和 `height` 属性， 防止图片加载过程中布局跳动。

```tsx
import Image from "@symph/joy/react";
import logoImg from "./logo.png";

function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Image
        src={logoImg}
        alt="logo"
        // width={100} 未设置时，默认采用图片的宽度。
        // height={100} 未设置时，默认采用图片的高度。
        // blurDataURL="data:..." 未设置时，默认使用原
        //
        // 始图片 8 * 8 的模糊缩略图。
        // placeholder="blur" // 默认使用模糊缩略图，或者设置为 empty 空白
      />
      <p>Welcome to my homepage!</p>
    </>
  );
}
```

### 使用远程图片

使用远程图片和本地图片类似，只是 `src` 属性设置为远程图片的相对或绝对字符串 URL 地址。 因为在编译时 Joy 不能访问远程图片，所以不能得到图片的高宽，我们需要明确的手动指定图片的 `width` 和 `height` 属性。

```tsx
import Image from "@symph/joy/react";
import logoImg from "./logo.png";

function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Image
        src="/logo.png" // 图片的 URL 相对路径。
        alt="logo"
        width={100}
        height={100}
      />
      <p>Welcome to my homepage!</p>`
    </>
  );
}
```

如果是外部域名，例如：`https://example1.com/logo.png` ，我们应该添加`domians`配置来设置安全域白名单，保护我们的应用程序不被恶意的用户破坏，不在这些域名内的图片，将拒绝提供图片优化服务。
在 `joy.config.js`中设置 `domains`来指定安全域，例如：

```js
module.exports = {
  images: {
    domains: ["example1.com", "example2.com"],
  },
};
```

### 图片尺寸

图片影响用户体验的最常见的场景是改不布局，如图片在加载过程中推动其它元素。这对用户来说是非常糟糕的体验，以至于产生了一个核心指标 [累积布局偏移 CLS](https://web.dev/cls/) 来量化用户经历意外布局偏移的频率。
避免因图片加载导致布局偏移的方法是始终设置图片的大小，这让浏览器在加载之前为图片预留足够的空间。

`Image` 组件是为了保证良好的性能结果而设计的，所以它会采用以下 3 中方式来确定图片大小，防止布局变化：

1. 自动识别大小， 当采用静态导入的时候。
2. 明确指定大小， 使用 `width` 和 `height` 属性明确设置图片大小。
3. 隐式声明， 设置属性 `layout="fill"`，使图片缩放适配其父元素大小。

另外图片文件大小也是影响页面加载性能的重要因素之一，加载图片时，`Image` 组价计算出图片展示尺寸后，会从 `[16, 32, 48, 64, 96, 128, 256, 384, ...]`等尺寸规格中选取比当前展示尺寸大一号的图片版本，例如图片展示宽度为 `80px`，会加载`96px`规格的图片副本。
并且副本图片会优先采用`webp`或者`avif`等压缩率和压缩质量较高的图片格式，进一步减小图片的文件大小。

### 加载优先级

我们应该为任何的 [最大内容绘制 LCP](https://web.dev/lcp) 的图片元素设置 `priority` 属性，从而让 Joy 优先加载图片（通过预加载标签和优先级属性实现 ），减少最大内容绘制耗时。

通常最大内容绘制元素是页面可视区域内的大尺寸图片或者文本块，当使用 `joy dev` 开发模式运行应用时，如果一个最大内容绘制元素的`Image` 组件未设置 `priority`属性，将会在 console 里收到一条提示信息。

### 内置图片优化服务

Joy 内置图片优化服务，该服务可以优化 web 上的任何图像，然后从 Joy 的内置 web 服务器对外提供这些优化后图像。

从以下几个优化面：

- 根据界面布局大小，使用缩小版的图片。
- 转换为压缩质量更高的图片格式，例如 `webp`。
- 提供低质量的图片，提升加载速度。
- 设置图片资源缓存，有效利用浏览器缓存。

该服务对外提供 API GET 接口： `/_joy/image`， 接口参数：

- `url`: `string` 必须，图片的下载地址，可以是本地相对或绝对路径，或者远程绝对路径。
- `w`: `number` 必须，图片的宽度，等比缩放图片使宽度等于该值。
- `q`: `number` 非必须，图片的压缩质量百分比，取 0 到 100 的整数，默认 75。
- `mimeType`：隐藏参数，无需设置，通过请求 header 的`accept`自动获取，例如浏览器支持 `accept: image/webp`,将优先返回 `webp`格式，否则返回原图片格式。

例如我们希望获取宽度 32px，压缩质量 75%、格式为`webp`的图片，完整的请求 URL 路径为：`http://localhost:3000/_joy/image/?url=%2Fexample.png&w=32&q=75`

> 该服务内部默认使用 [`squoosh`](https://www.npmjs.com/package/@squoosh/lib) 库来加工图片，因为它安装起来很快，而且适合于开发环境。
> 在生成环境中，建议替换为[`sharp`](https://www.npmjs.com/package/sharp)工具，在项目目录中运行 `yarn add sharp` 来安装 [`sharp`](https://www.npmjs.com/package/sharp)，安装成功后重启应用，会自动切换为 [`sharp`](https://www.npmjs.com/package/sharp)。
> `sharp` 比 `squoosh` 能更快更高效的处理图片，由于 `sharp` 在安装时会下载其底层依赖`libvips`包，受网络环境的影响较大，安装很缓慢且容易失败，所以在开发环境使用安装更轻便的`squoosh`。

### 图片加载器

通过设置图片的 `loader` 属性指定加载器，图片加载器是一个方法，用于生成图片 URL 地址或者多尺寸的图片地址集合，地址集合将用于生成 `<img />`标签的`srcset`属性，从而为用户提供满足他们展示设备的大小图片。

Joy 应用的默认加载器 ` default` 使用内置的图片优化服务 API。
如果我们想直接从 CDN 或其它图像服务器上获取图片，可以用几行 JavaScript 实现一个新的加载器，使用一个 Joy 内置的加载器。

下面示例展示如何使用 Imgix 服务商提供的图片服务，首先配置图片模块，设置全局的默认加载器为内置的 `imgix`，也可以不用全局配置，在`Image`组件内设置每个组件自己的加载器。

```ts
// joy.confing.js
module.exports = {
  images: {
    loader: "imgix",
    path: "https://static.imgix.net",
  },
};
```

在`Image`组件内定义图片路径和大小等信息：

```tsx
<Image src="/daisy.png" width={300} qulity={75} />
```

上面的例子中，最终图片加载地址类似于：`https://static.imgix.net/daisy.png?auto=format&fit=max&w=300&q=75`

### 图片样式

`Image` 组件和标准的 `<img >`标签在样式设置上没有太大不同，下面是一些需要注意的指导建议：

- 使用 `className` 来查询图片和定义样式，不应该依赖 DOM 结构， `Image` 组件是一个复合组件，里面使用 `<span>`标签包裹`<img>`标签，在某些情况下，我们并不能使用 DOM 结构精确的定位到图片。
- 使用正确的布局模式，`Image` 组件提供了几种不同的布局模式来定义它在页面上的大小。
- 当 `layout="fill"` 时，其父元素的样式必须包含 `position: relative`。
- 的 `layout="responsive"` 时，其父元素样式必须包含 `display: block`。

### Image 组件属性

#### src

属性名称：`src`，类型：`string|StaticImport`，默认值：`-`，必须：`true`

必须是下列之一：

- 静态导入`import`的图片对象。
- 字符串，可以是一个绝对的外部 URL，也可以是一个内部路径，这取决于配置的`loader`。

使用外部 URL，我们应该设置安全域（在应用配置里添加`images.domains`配置）.

#### width

属性名称：`width`，类型：`number`，默认值：`undefined`，必须：`false`

图片的宽度，输入整数的像素值。
必须设置该属性，除非是静态导入的图片或者`layout="fill"`时。

#### height

属性名称：`height`，类型：`number`，默认值：`undefined`，必须：`false`

图片的宽度，输入整数的像素值。
必须设置该属性，除非是静态导入的图片或者`layout="fill"`的时。

#### loader

属性名称：`loader`，类型：`(resolverProps:ImageLoaderProps) => string`，默认值：`undefined`，必须：`false`

`loader` 是一个自定义方法，使用图片的属性来生成完整 URL 地址，接受以下参数：

- `src`: `string` 图片的相对或绝对路径。
- `width`: `number` 期望加载图片的宽度。
- `quality`: `number` 期望加载图片的压缩质量。
- `config`: `ImageConfig` 图片模块的配置。

下面是一个自定义的加载器示例：

```tsx
import Image from "@symph/joy/react";

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = (props) => {
  return <Image loader={myLoader} src="me.png" alt="Picture of the author" width={500} height={500} />;
};
```

Joy 内建了一些云服务提供商的图片加载器，我们可以在应用配置点 `images.loader` 上, 设置默认图片加载器。

#### layout

属性名称：`layout`，类型： `"intrinsic"|"fixed"|"responsive"|"fill"`，默认值：`"intrinsic"`，必须：`false`

通过 `layout`属性设置布局模式，用于定义图片布局将随窗口变化时如何变化，Joy 内置了以下 4 种布局模式：

- `intrinsic`
  默认布局，当父容器的宽度小于图片组件的宽度时，缩小图片尺寸以适应父容器的宽度，当父容器的宽度大于图片组件的宽度时，会展示图片组件的固定宽度。
  受影响的属性：

  - `srcSet`： 基于当前图片组件的尺寸，从 `imageSizes` 中选取和组件尺寸相同或大一号的尺寸，生成 `srcSet` 中 `1x`，`2x`的图片。
  - `sizes`: 该属性值无效。

- `fixed` 图片组件的尺寸不会随着父容器的大小改变而改变，这个标准的`img`标签的表现一样。
  受影响的属性：

  - `srcSet`： 基于当前图片组件的尺寸，从 `imageSizes` 中选取和组件尺寸相同或大一号的尺寸，生成 `srcSet` 中 `1x`，`2x`的图片。
  - `sizes`: 该属性值无效。

- `responsive` 图片组件将缩放适应父元素的宽度，父元素需要样式需包含 `display: block`。
  在不同的窗口尺寸下，组件将加载对应尺寸的图片。例如：在`1080px`宽度的窗口上加载 `1080px` 版本的图片，在`1920px`宽度的窗口上加载 `1920px`版本的图片。
  受影响的属性：

  - `srcSet`： 将 `imageSizes` 和 `deviceSizes` 定义的所有尺寸生成 `srcSet` 列表，以便可以响应式的加载对应尺寸的图片。
  - `sizes`: 默认为 `100vw`。

- `fill` 图片组件宽度和高度将拉伸到父元素的尺寸，父元素需要是相对布局的，样式需包含 `position: relative `。
  配合 `objectFit` 属性定义拉伸缩放模式，例如：`fill` 拉伸填充， `contain` 包含等。
  受影响的属性：

  - `srcSet`： 将 `imageSizes` 和 `deviceSizes` 定义的所有尺寸生成 `srcSet` 列表，以便可以响应式的加载对应尺寸的图片。
  - `sizes`: 默认为 `100vw`。

#### sizes

属性名称：`sizes`，类型： `string`，默认值：`undefined`，必须：`false`

指定不同页面布局的图像大小了， 例如：`sizes="(max-width: 360px) 340px, 128px"`，表示当视区宽度不大于 360 像素时候，图片的宽度限制为 340 像素，其他情况下，使用 128 像素。

当 `layout="responsive"` 或者 `layout="fill"` 时，默认值时 `100vw` 即占满整个窗口，我们可以设置更小的值，使图片小于窗口的宽度。

当 `layout="intrinsic"` 或者 `layout="fixed"` 时，`sizes`属性是无效的，因为它依赖的是父容器边界大小。

[了解更多](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes)

#### objectFit

属性名称：`objectFit`，类型： `string`，默认值：`undefined`，必须：`false`

当 `layout="fill"`时，定义图片如何填充父元素， 如：

- `fill` 图片拉伸填充整个父容器。
- `container`图片等比放大后填满父容器的整个宽度或高度。
- `cover` 图片等比放大覆盖整个父容器。
- `none` 图片缩放，在父容器中心按原尺寸展示图片。

该属性将直接传递给 `img` 的 [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) 属性。

#### objectPosition

属性名称：`objectPosition`，类型： `string`，默认值：`undefined`，必须：`false`

当 `layout="fill"`时，定义图片在父元素的布局位置，例如： `"right top"`

该属性将直接传递给 `img` 的 [`object-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) 属性。

#### quality

属性名称：`quality`，类型： `number`，默认值：`75`，必须：`false`

`quality`属性设置加载什么质量的图片，质量是相对于原图片的压缩质量，取 `1` 到 `100` 的整数，默认值 `75`。
数值越高质量越好，同时图片的文件大小也会越大。

#### priority

属性名称：`priority`，类型： `bool`，默认值：`false`，必须：`false`

如果为 `true` 图片将尽量优先加载，图片延迟加载将自动关闭。

我们应该为任何的 [最大内容绘制 LCP](https://web.dev/lcp) 的图片元素设置 `priority` 属性。

#### loading

属性名称：`loading`，类型： `string`，默认值：`lazy`，必须：`false`

设置图片的加载时机。

- `lazy` 延迟加载图片，当图片滚动到可视区域时才开始加载图片。
- `eager` 立即加载图片。

> 请尽量保持默认的 `lazy` 模式，立即加载 `eager` 模式，在大多数情况下会影响网页的加载性能。如需尽快加载图片，推荐使用 `priority` 属性。

#### lazyBoundary

属性名称：`lazyBoundary`，类型： `string`，默认值：`"200px"`，必须：`false`

当图片延迟加载时，检查图片到可视区域的距离阈值，当小于这个阈值时，即视为图片即将展示，需立即开始加载图片，触发加载过程。

如果图片时嵌入在一个内部可滚动的父容器中，需要通过`lazyRoot`属性指定父容器，使用父容器的滚动位置来计算可视区域，而不是直接使用 document 的滚动位置。

#### lazyRoot

属性名称：`lazyRoot`，类型： `ref`，默认值：`null`，必须：`false`

设置一个 [React Ref](https://reactjs.org/docs/refs-and-the-dom.html) ，指向滚动的父容器。默认值 `null`，表示 document。

```tsx
import React from "react";
import Image from "@symph/joy/react";

const lazyRoot = React.useRef(null);

const Example = () => (
  <div ref={lazyRoot} style={{ overflowX: "scroll", width: "500px" }}>
    <Image lazyRoot={lazyRoot} src="/one.jpg" width="500" height="500" />
    <Image lazyRoot={lazyRoot} src="/two.jpg" width="500" height="500" />
  </div>
);
```

Ref 必须指向一个 DOM 元素，而不是 React Component 复合组件。如果父元素是 React Component 中，可以使用 [forwarding-refs](https://reactjs.org/docs/forwarding-refs.html) 方法，将引用指向其内部 DOM 元素。例如：

```tsx
import React from "react";
import Image from "@symph/joy/react";

const Container = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ overflowX: "scroll", width: "500px" }}>
      {props.children}
    </div>
  );
});

const Example = () => {
  const lazyRoot = React.useRef(null);

  return (
    <Container ref={lazyRoot}>
      <Image lazyRoot={lazyRoot} src="/one.jpg" width="500" height="500" />
      <Image lazyRoot={lazyRoot} src="/two.jpg" width="500" height="500" />
    </Container>
  );
};
```

#### placeholder

属性名称：`placeholder`，类型： `"blur"|"empty"`，默认值：`"empty"`，必须：`false`

`placeholder`属性设置图片加载中的占位图，提供 `blur`和`emtpy`两个选项，默认值：`emtpy`。

当 `placeholder="blur"` 时，使用`blurDataURL`图片来显示占位图。 如果 `src` 设置的是静态`import`的图片对象，如：导入的`.jpg`、`.png`、`.webp`等，`blurDataURL`属性将自动从导入对象中取值。
如是是动态加载的远程图片，需要手动提供 `blurDataURL` 属性。

当 `placeholder="blemtpyur"`时，图片在加载过程中，将保留空白的区域，无任何的展位图。

#### blurDataURL

属性名称：`placeholder`，类型： `string`，默认值：`undefined`，必须：`false`

当 `placeholder="blur"`时，使用 `blurDataURL` 的内容来展示占位图，值必须是 Base64 编码的 DataUrl 字符串。
占位图会被放大和模糊，所以建议使用非常小的图像(10px 或更小)，Joy 静态导入的图片，默认是 8px 的缩略图。

#### unoptimized

属性名称：`unoptimized`，类型： `bool`，默认值：`false`，必须：`false`

为 `true` 时，关闭图片优化，将使用图片的源文件，不会使用经过大小、质量和格式优化后的图片。

#### onLoadingComplete

属性名称：`onLoadingComplete`，类型： `function`，默认值：`undefiend`，必须：`false`

图片加载完成后的回调函数，接受 1 个对象参数，对象参数有以下属性：

- [`naturalWidth` ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalWidth)
- [`naturalHeight`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalHeight)

#### others

赋值给`<Image >`组件的其它属性，将直接传递给内部的 `img` 标签。有以下几点需注意：

- `style`属性，请使用 `className` 方式替换，不能直接给图片组件内联样式。
- `srcSet`属性，请配置`images.deviceSize`项，设置可支持的设备窗口大小列表，组件会自动计算出合适的`srcSet`集合。
- `ref`属性，请使用`onLoadingComplete`替换，如需获取图片的信息，可在该回调函数中获取。
- `decoding` 属性需一直保持为 `"async"`。

### 图片模块配置

`Image` 组件和图片优化服务可以在应用配置的`images`节点中自定义配置。
下面是应用的默认配置示例：

```ts
module.exports = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  path: "/_joy/image",
  loader: "default",
  domains: [],
  disableStaticImages: false,
  minimumCacheTTL: 60,
  formats: ["image/webp"],
  dangerouslyAllowSVG: false,
  contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
  unoptimized: false,
};
```

#### domains

配置名称：`domains`，类型： `stirng[]`，默认值：`[]`，必须：`false`

当使用其它域名的远程图片时，为了保护我们的应用程序不被恶意的用户破坏，`domains`配置远程图片所在域名的白名单，不在这些域名内的图片，`Image` 组件和图片优化将拒绝服务。

#### loader

配置名称：`loader`，类型： `string`，默认值：`"default"`，必须：`false`

如果我们想不使用 Joy 内建的图片服务， 而想使用其它云服务商提供的图片存储和优化服务，可以配置 `loader` 参数来切换图片加载方式。
一般结合 `path` 参数使用， `path`参数设置图片的 URL 地址前缀，而后在`Image`的 src 属性上，只需设置图片的相对路径。

```tsx
module.exports = {
  images: {
    loader: "imgix",
    path: "https://static.imgix.net",
  },
};
```

Joy 提供了以下内置加载器：

- `default` : 使用内置图片优化服务的加载器。
- `imgix`: 使用 [Imgix](https://imgix.com/) 服务商提供的图片服务。
- `cloudinary`: 使用 [Cloudinary](https://cloudinary.com/) 服务商提供的图片服务。
- `akamai`: 使用 [Akamai](https://www.akamai.com/) 服务商提供的图片服务。
- `custom`: 使用自定义的云服务，设置该选项后，每个`Image` 组件必须设置自定义的`loader`属性。

#### path

配置名称：`path`，类型： `string`，默认值：`"/_joy/image"`，必须：`false`

在默认 `loader="default"` 时， path 的默认值是 `"/_joy/image"`， 即使用 Joy 内置的图片优化服务。

如果使用其它图片服务，可以设置`path`配置图片的统一 URL 地址前缀，而后在`Image`的 src 属性上只需设置图片的相对路径，运行时将两者合并生成完整的图片地址。

#### deviceSizes

配置名称：`deviceSizes`，类型： `number[]`，默认值：`[640, 750, 828, 1080, 1200, 1920, 2048, 3840]`，必须：`false`

当我们明确知道用户设备的宽度有哪些时，我们可以设置一个列表将这些宽度分段，在分段区间的内，加载对应尺寸的图片，从而让用户在各种尺寸的屏幕上，都可以获得较好的体验。
这些设备宽度仅会在`Image` 组件 `layout="responsive"` 或 `layout="fill"` 时使用得到。

#### imageSizes

配置名称：`imageSizes`，类型： `number[]`，默认值：`[16, 32, 48, 64, 96, 128, 256, 384]`，必须：`false`

我们可以设置图片的宽度列表，这些宽度与`deviceSizes` 数组连接在一起，用于生成图像 srcsets 的完整大小数组。

之所以有两个单独的宽度列表，是因为 `imageSizes` 只用于设置了`sizes`属性的图片，即图片的宽度小于全尺寸的屏幕宽度。因此，`imageSizes` 中的大小应该都小于`deviceSizes`中的最小大小。

#### formats

配置名称：`formats`，类型： `string[]`，默认值：`["image/webp"]`，必须：`false`

如果请求的`Accept`头能匹配配置列表中的多个格式，则使用数组中的第一个匹配项作为返回格式。因此，数组的顺序很重要。如果没有匹配的格式，将返回原始图像的格式。

例如我们想优先使用`image/avif`，如果浏览器不支持 avif，则再检查是否支持 'image/webp' 格式，如果还不支持，则返回图片原格式，可以这样编写配置：

```ts
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
```

> AVIF 编码通常要多花 20%的时间，但它比 WebP 多压缩了 20%的空间。这意味着第一次请求图片时，它通常会缓慢点，而缓存后，后续请求会变快。

#### minimumCacheTTL

配置名称：`minimumCacheTTL`，类型： `number`，默认值：`60`，必须：`false`

设置图片的在优化服务内的最小缓存时长，单位秒。
大多数情况下，建议使用使用 [静态导入](#静态导入) 的方式加载图片，这将自动为图片生成一个唯一的 hash 值，并设置`Cache-Control`为`immutable`，使图片长期有效。

#### disableStaticImages

配置名称：`disableStaticImages`，类型： `bool`，默认值：`false`，必须：`false`

默认情况下，我们可以直接静态导入图片，如 `import logo from "./logo.png"`，然后设置给图片组件的 `src`属性。

但有时候，如果静态导入和其它插件冲突，或者想自定义 webpack 插件以实现不同的导入方式，我们可以设置为`false`关闭默认的图片导入插件。

#### dangerouslyAllowSVG

配置名称：`dangerouslyAllowSVG`，类型： `bool`，默认值：`false`，必须：`false`

默认 Joy 的内置图片优化服务不会对 SVG 格式的图片进行优化。
首先，SVG 是一种矢量格式，这意味着它可以无损地调整大小。其次，SVG 有许多与 HTML/CSS 相同的特性，如果没有适当的内容安全策略(CSP)头，这些特性可能会导致漏洞。

如果想内置的图片优化服务提供 SVG 图片格式，可以启用该功能，并设置适当的内容安全策略。

```ts
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```
