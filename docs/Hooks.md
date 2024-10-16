# [Custom Hooks](/src/hooks/)

## 1. [`useAuth`](/src/hooks/useAuth.js)

The `useAuth` hook is used to access the authentication context created in [JWTContext](/src/contexts/JWTContext.jsx). It provides a convenient way to retrieve the authentication state and functions without having to manually use the `useContext` hook.

### Usage

```javascript
import useAuth from 'hooks/useAuth';

// Inside a functional component
const { isLoggedIn, register, login, logout, user } = useAuth();

login(email,password);
logout();
register(email, password, firstName, lastName);

user.firstName, user.lastName ...
```

Note: `user` object is set by the login function according to the user returned by backend so attributes may vary.

## 2. [`useConfig`](/src/hooks/useConfig.js)

The `useConfig` hook is used to access the configuration context created in [ConfigContext](/src/contexts/ConfigContext.jsx). It provides a simple way to retrieve configuration settings without having to manually use the `useContext` hook.

### Usage

```javascript
import useConfig from 'hooks/useConfig';

// Inside a functional component
const { theme, language } = useConfig();
```

## 3. [`useLocalStorage`](/src/hooks/useLocalStorage.js)

The `useLocalStorage` hook is a custom hook that allows you to easily use local storage in your components. It provides a stateful value and a function to update that value, which is automatically synchronized with local storage.

### Usage

```javascript
import useLocalStorage from 'hooks/useLocalStorage';

// Inside a functional component
const [value, setValue] = useLocalStorage('key', defaultValue);
```

## 4. [`useScriptRef`](/src/hooks/useScriptRef.js)

The `useScriptRef` hook is used to determine whether a component is still mounted. It returns a ref object that can be used to check if the component is still in the DOM. This can be useful for preventing memory leaks and other issues that can occur when components are unmounted but asynchronous operations are still in progress.

### Usage

```javascript
import useScriptRef from 'hooks/useScriptRef';

// Inside a functional component
const scripted = useScriptRef();

useEffect(() => {
  // Perform an asynchronous operation
  someAsyncOperation().then(() => {
    if (!scripted.current) {
      // The component is no longer mounted, so do not update state or perform any other operations
      return;
    }
    // The component is still mounted, so update state or perform other operations
  });
}, []);
```
