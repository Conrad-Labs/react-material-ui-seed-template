# Contexts

### [JWTContext.jsx](/src/contexts/JWTContext.jsx)

The JWTContext.jsx file contains the user auth logic api requests. The localStorage tokens are also set here. The api requests for login, register, resetPassword and updateProfile are executed here. URLs for api requests can be changed here.


#### 1. `login(email, password)`

**Description**:
The `login` function takes the email and password to make an api request to the backend. It then dispatches the [LOGIN](/src/store/actions.js) action to update the [account slice](/src/store/accountReducer.js) with user state. It also sets the axios header with the auth session token.



#### 2. `register(email, password, firstName, lastName)`

**Description**:
The register fucntion sends an api request to register a user. It then updates the users array in local storage to add the newly registered user.


#### 3. `register(email, password, firstName, lastName)`

**Description**:
The register fucntion sends an api request to register a user. It then updates the users array in local storage to add the newly registered user.

#### 4. `logout`

**Description**:
The logout function dispatches the [LOGOUT](/src/store/actions.js) actions to the [accountReducer](/src/store/accountReducer.js). It also deletes the session token.

---

### [ConfigContext.jsx](/src/contexts/ConfigContext.jsx)

The `ConfigContext.jsx` file contains the configuration context and provider to manage the theme and other UI for the application. It uses React's `createContext` and `useLocalStorage` hooks to manage the application's configuration settings.

#### Initial State

The `initialState` object contains the default configuration settings for the application, including the menu orientation, mini drawer, font family, border radius, outlined filled, mode, preset color, i18n, theme direction, and container.

#### ConfigProvider

The `ConfigProvider` component is a functional component that wraps the application's components and provides the configuration context to them. It uses the `useLocalStorage` hook to store the configuration settings in the browser's local storage.

The `ConfigProvider` component defines several functions to update the UI: `onChangeMenuOrientation`, `onChangeMiniDrawer`, `onChangeMode`, `onChangePresetColor`, `onChangeLocale`, `onChangeDirection`, `onChangeContainer`, `onChangeFontFamily`, `onChangeBorderRadius`, and `onChangeOutlinedField`. These functions update the following configuration parameters:

1. `menuDirection`: Sets the orientaion of the sidebar menu to either horizontal or vertical.

2. `miniDrawer`: True if the sidebar menu is collapsed by default. 

3. `fontFamily`: The font used by the app following the format `(Font), (backup)` eg `'Roboto', sans-serif`

4. `borderRadius`: self explanatory
5. `outlinedFilled`: `true` if the input text boxs need to be filled grey.
6. `mode`: Dark or light mode. 
7. `presetColor`: Set the preset color set in scss file in [assets/scss](/src/assets/scss/)
8. `i18n`: Language used. Current support for English, Fracois, Romanian and Chinese (Simplified).
9. `themeDirection`: Provided Right to Left orientation (needs to be removed)
The `ConfigProvider` component also defines a `onReset` function that resets the configuration settings to their default values.

The initial values of all config parameters are set in [config.js](/src/config.js). Additional information about setting themes can be found in [Themes](/docs/Themes.md)