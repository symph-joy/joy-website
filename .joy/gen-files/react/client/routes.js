import {JoyReactRouteLoader} from '@symph/joy/dist/react/router/joy-react-route-loader'


export const joyReactAutoGenRoutes = {
  name: "joyReactAutoGenRoutes",
  type: Array,
  useValue:   [
    {
      path: "/",
      
      
      
      
      componentName: "mainLayout",
      
      componentModule: require("/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/layout.tsx"),
      render: (routeProps) => {
        return <JoyReactRouteLoader {...routeProps} />;
      },
    children:   [
    {
      path: "/",
      
      index: true,
      
      
      componentName: "helloController",
      
      componentModule: require("/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/index.tsx"),
      render: (routeProps) => {
        return <JoyReactRouteLoader {...routeProps} />;
      },
    children:   [
  ]

    },
    {
      path: "/docs",
      
      
      
      
      componentName: "docsLayout",
      
      componentModule: require("/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/docs/layout.tsx"),
      render: (routeProps) => {
        return <JoyReactRouteLoader {...routeProps} />;
      },
    children:   [
    {
      path: "/docs/*",
      
      
      
      catchAllParam: "path",
      componentName: "path",
      
      componentModule: require("/Users/wangyi767/Desktop/symph/symph-joy/packages/joy-website/src/client/pages/docs/[...path].tsx"),
      render: (routeProps) => {
        return <JoyReactRouteLoader {...routeProps} />;
      },
    children:   [
  ]

    },
  ]

    },
  ]

    },
  ]

}
