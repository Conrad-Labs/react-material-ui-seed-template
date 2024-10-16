# Routes

This documentation provides an overview of the routing files used in the project, including `MainRoutes.jsx`, `index.jsx`, `AuthenticationRoutes.jsx`, and `LoginRoutes.jsx`. These files define the routing configuration for the application, which includes the paths, components, and layouts used for different pages.

## [`index.jsx`](/src/routes/index.jsx)

The `index.jsx` file is responsible for creating the browser router and combining the main, login, and authentication routes. It imports the `createBrowserRouter` function from `react-router-dom` and the route objects from `MainRoutes.jsx`, `LoginRoutes.jsx`, and `AuthenticationRoutes.jsx`. The `createBrowserRouter` function is then called with an array of the route objects and the `basename` property, which specifies the base URL for the application. 

The base URL ENV key is `VITE_APP_BASE_NAME`

## [`MainRoutes.jsx`](/src/routes/MainRoutes.jsx)

The `MainRoutes.jsx` file defines the main routing configuration for the application. All routes here are children of [MainLayout](/src/layout/MainLayout/) and wrapped in [AuthGuard](/src/utils/route-guard/AuthGuard.jsx) ([docs](/docs/Guards.md)). Each element has the following attributes:

- `path`: The base path for the main routes.
- `element`: The layout component to be used for the main routes, which is wrapped in an `AuthGuard` component to protect the routes.
- `children`: An array of objects that define the individual routes for the application. Each object contains the `path` and `element` properties, which specify the path for the route and the component to be rendered, respectively.

Elements are lazily loaded using [Loadable](/src/ui-component/Loadable.jsx) that uses [Suspense](https://react.dev/reference/react/Suspense) as a fallback until the current components children are loaded. The fallback here is [Loader](/src/ui-component/Loader.jsx).

## [`MaintanencePageRoutes`](/src/routes/MaintanencePageRoutes.jsx)

The `MaintanencePageRoutes.jsx` file defines the routing configuration for the authentication pages, such as error pages and maintenance pages. It imports the necessary components and libraries, such as `Loadable` and `MinimalLayout`. The file then defines the `AuthenticationRoutes` object, which contains the path, element, and children properties.

- `path`: The base path for the authentication routes.
- `element`: The layout component to be used for the authentication routes.
- `children`: An array of objects that define the individual routes for the authentication pages. Each object contains the `path` and `element` properties, which specify the path for the route and the component to be rendered, respectively.

## `LoginRoutes.jsx`

The `LoginRoutes.jsx` file defines the routing configuration for the login pages, such as the login, register, forgot password, check mail, and reset password pages. All children components are wrapped in *[NavMotion](/src/layout/NavMotion.jsx) and [GuestGuard](/src/utils/route-guard/GuestGuard.jsx) [(docs)](/docs/Guards.md).

- `path`: The base path for the login routes.
- `element`: The layout component to be used for the login routes, which is wrapped in a `NavMotion` and `GuestGuard` component to protect the routes and add motion to the navigation.
- `children`: An array of objects that define the individual routes for the login pages. Each object contains the `path` and `element` properties, which specify the path for the route and the component to be rendered, respectively.

Overall, these routing files work together to define the structure and navigation of the application, including the protection of certain routes and the layout components used for different pages.



*[NavMotion](/src/layout/NavMotion.jsx) adds a small fade when rendering components. 