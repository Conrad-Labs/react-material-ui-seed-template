# Introduction

This is material design template created based on materially structure

# Getting Started

1. Installation process
   - run 'npm install / yarn'
   - start dev server run 'npm run start / yarn start'
2. Deployment process
   - Goto full-version directory and run 'npm run build / yarn build'

Further docs can be found [here](/docs/)

# Directory Structure

```
├── README.md
├── deploy
│   └── buildspec.yml
├── docs
│   ├── Themes.md
│   └── images
├── favicon.svg
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── pull_request_template.md
├── src
│   ├── App.jsx
│   ├── api
│   │   └── menu.js
│   ├── assets
│   │   ├── images
│   │   └── scss
│   ├── config.js
│   ├── contexts
│   │   ├── ConfigContext.jsx
│   │   └── JWTContext.jsx
│   ├── data
│   │   └── location.js
│   ├── hooks
│   │   ├── useAuth.js
│   │   ├── useConfig.js
│   │   ├── useLocalStorage.js
│   │   └── useScriptRef.js
│   ├── index.jsx
│   ├── layout
│   │   ├── MainLayout
│   │   ├── MinimalLayout
│   │   ├── NavMotion.jsx
│   │   └── NavigationScroll.jsx
│   ├── menu-items
│   │   ├── elements.jsx
│   │   ├── forms.jsx
│   │   ├── index.jsx
│   │   ├── misc_widgets.jsx
│   │   ├── pages.jsx
│   │   ├── sample-page.jsx
│   │   ├── support.jsx
│   │   └── utilities.jsx
│   ├── reportWebVitals.jsx
│   ├── routes
│   │   ├── LoginRoutes.jsx
│   │   ├── MainRoutes.jsx
│   │   ├── MaintanencePageRoutes.jsx
│   │   └── index.jsx
│   ├── serviceWorker.jsx
│   ├── store
│   │   ├── accountReducer.js
│   │   ├── actions.js
│   │   ├── constant.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── slices
│   ├── themes
│   │   ├── compStyleOverride.jsx
│   │   ├── index.jsx
│   │   ├── palette.jsx
│   │   ├── shadows.jsx
│   │   └── typography.jsx
│   ├── ui-component
│   │   ├── Loadable.jsx
│   │   ├── Loader.jsx
│   │   ├── Locales.jsx
│   │   ├── Logo.jsx
│   │   ├── RTLLayout.jsx
│   │   ├── cards
│   │   ├── extended
│   │   └── third-party
│   ├── utils
│   │   ├── axios.js
│   │   ├── getDropzoneData.js
│   │   ├── getImageUrl.js
│   │   ├── locales
│   │   ├── password-strength.js
│   │   └── route-guard
│   ├── views
│   │   ├── application
│   │   ├── forms
│   │   ├── pages
│   │   ├── sample-page
│   │   ├── ui-elements
│   │   ├── utilities
│   │   └── widget
│   └── vite-env.d.js
├── tsconfig.node.json
├── vite.config.mjs
└── yarn.lock
```


# Docs

- [Auth Forms](./docs/Auth%20Forms.md)
- [Contexts](./docs/Contexts.md)
- [Guards](./docs/Guards.md)
- [Hooks](./docs/Hooks.md)
- [Layout](./docs/Layout.md)
- [Routes](./docs/Routes.md)
- [Store](./docs/StoreDocs.md)
- [Themes](./docs/Themes.md)
- [ThemesConfig](./docs/ThemesConfig.md)
- [UI Components](./docs/UI%20Components.md)
- [Widgets](./docs/Widgets.md)
