## Store

This repo uses Redux to implement a store to manage the logged in user information and snackbar state.

### Account store

[Account store slice](/src/store/accountReducer.js) maintains 3 attributes:
1. `isLoggedIn`: boolean
2. `isInitialized`: boolean
3. `user`: The user object returned by the backend

The [JWTContext](/src/contexts/JWTContext.jsx) updates the accountSlice by dispatching actions.

Note: The store is not used to access the user object. The project accesses the user object using the [useAuth](/src/hooks/useAuth.js) hook and by extension [JWTContext](/src/contexts/JWTContext.jsx).

### [SnackBar Store](/src/store/slices/snackbar.js)

The `snackbar` slice is responsible for managing the state of the snackbar component, which is a non-disruptive notification that briefly appears at the bottom of the screen. This slice is mostly used by [notistack](/src/ui-component/extended/notistack/).

#### Initial State

The initial state of the `snackbar` slice is defined as follows:

```javascript
const initialState = {
    action: false,
    open: false,
    message: 'Note archived',
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
    },
    variant: 'default',
    alert: {
        color: 'primary',
        variant: 'filled'
    },
    transition: 'Fade',
    close: true,
    maxStack: 3,
    dense: false,
    iconVariant: 'hide',
    actionButton: false
};
```

- `action`: A boolean value that indicates whether the snackbar has an action or not.
- `open`: A boolean value that indicates whether the snackbar is open or closed.
- `message`: A string that represents the message displayed in the snackbar.
- `anchorOrigin`: An object that defines the position of the snackbar on the screen.
- `variant`: A string that defines the variant of the snackbar.
- `alert`: An object that defines the color and variant of the snackbar when it is used as an alert.
- `transition`: A string that defines the transition effect of the snackbar.
- `close`: A boolean value that indicates whether the snackbar can be closed by the user or not.
- `maxStack`: A number that defines the maximum number of snackbars that can be stacked on the screen.
- `dense`: A boolean value that indicates whether the snackbar is dense or not.
- `iconVariant`: A string that defines the variant of the icon displayed in the snackbar.
- `actionButton`: A boolean value that indicates whether the snackbar has an action button or not.

#### Reducers

The `snackbar` slice defines the following reducers:

##### openSnackbar

The `openSnackbar` reducer is used to open the snackbar and update its state based on the payload provided. The payload can contain the following properties:

- `open`: A boolean value that indicates whether the snackbar should be opened or not.
- `message`: A string that represents the message displayed in the snackbar.
- `anchorOrigin`: An object that defines the position of the snackbar on the screen.
- `variant`: A string that defines the variant of the snackbar.
- `alert`: An object that defines the color and variant of the snackbar when it is used as an alert.
- `transition`: A string that defines the transition effect of the snackbar.
- `close`: A boolean value that indicates whether the snackbar can be closed by the user or not.
- `actionButton`: A boolean value that indicates whether the snackbar has an action button or not.

##### closeSnackbar

The `closeSnackbar` reducer is used to close the snackbar.

##### handlerDense

The `handlerDense` reducer is used to update the `dense` property of the snackbar state based on the payload provided. The payload should contain the following property:

- `dense`: A boolean value that indicates whether the snackbar should be dense or not.

##### handlerIncrease

The `handlerIncrease` reducer is used to update the `maxStack` property of the snackbar state based on the payload provided. The payload should contain the following property:

- `maxStack`: A number that defines the maximum number of snackbars that can be stacked on the screen.

##### handlerIconVariants

The `handlerIconVariants` reducer is used to update the `iconVariant` property of the snackbar state based on the payload provided. The payload should contain the following property:

- `iconVariant`: A string that defines the variant of the icon displayed in the snackbar.

#### Actions

The `snackbar` slice exports the following actions:

- `closeSnackbar`: An action creator that dispatches the `closeSnackbar` reducer.
- `openSnackbar`: An action creator that dispatches the `openSnackbar` reducer.
- `handlerDense`: An action creator that dispatches the `handlerDense` reducer.
- `handlerIconVariants`: An action creator that dispatches the `handlerIconVariants` reducer.
- `handlerIncrease`: An action creator that dispatches the `handlerIncrease` reducer.

These actions can be used to dispatch the corresponding reducers and update the state of the snackbar component.