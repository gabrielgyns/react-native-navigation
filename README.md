# Navigation with React Navigation

## 1. Using Navigation through Global Typing

## 2. Using Navigation through Props

Since our `Routes` component returns a `StackRoutes` wrapped in a `NavigationContainer` which is a Context that shares a prop routes, meaning, we can access the navigation through the component's props.
We need to create the `StackRoutesList` type in the `StackRoutes` component to be used as a generic type for the `createNativeStackNavigator` function.

In our component, we can do something like this:

```tsx
// src/app/Home.tsx

// We pass to the NativeStackScreenProps the type of the routes we created and the name of the route we are now.
type Props = NativeStackScreenProps<StackRoutesList, "home">;
```

And then, we can use the `navigation` prop in our component.

[Check this PR with this approach here](https://github.com/jefferson-dev/react-navigation-example/pull/1).
OBS.: I left the global typing, but we wouldn't need it in this case.

## 3. Making point 2 more Dynamic
