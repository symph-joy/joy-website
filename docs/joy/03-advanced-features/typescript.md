# 使用 TypeScript

`@symph/joy`应用默认支持 `TypeScript`，无需配置，即可创建`ts、tsx`文件，开始应用开发。

如果需更改TypeScript选项，可在项目根目录下创建`tsconfig.json`文件，添加自定义配置。

以下是默认配置：
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

