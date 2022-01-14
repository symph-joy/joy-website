import {MountModule} from "@symph/react/dist/mount/mount-module";


export const joyReactAutoGenRoutes =   [
    {
    path: "/",
    
    
    
    
    componentName: "mainLayout",
    
    componentModule: require("/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/layout.tsx"),
    children:   [
    {
    path: "/",
    index: true,
    
    
    
    componentName: "helloController",
    
    componentModule: require("/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/index.tsx"),
    children:   [
  ]

    },
    {
    path: "/docs",
    
    
    
    
    componentName: "docsLayout",
    
    componentModule: require("/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/docs/layout.tsx"),
    children:   [
    {
    path: "/docs/*",
    
    
    
    catchAllParam: "path",
    componentName: "path",
    
    componentModule: require("/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/docs/[...path].tsx"),
    children:   [
  ]

    },
  ]

    },
  ]

    },
  ]

