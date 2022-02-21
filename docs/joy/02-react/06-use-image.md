# 使用 图片

## JS 里导入

Joy React 默认可加载图片模块，例如：

```tsx
function Avator() {
  return <img src={require("./me.png")} />;
}
```

或者：

```tsx
import imgMe from "./me.png";

function Avator() {
  return <img src={imgMe} />;
}
```

使用 `require` 或 `import` 导入相对路径的图片， Joy 在编译时将自动把图片拷贝输出的 `static` 目录下，并返回 `static`下的URl路径，例如上面的例子，被编译后代码将转化为：
```tsx
function Avator() {
  return <img src='/static/me.png' />;
}
```




