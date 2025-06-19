# Navigation with React Navigation

## Stack Navigation

https://github.com/user-attachments/assets/728b025e-dc68-4ba5-826a-dc0e786d532f

[React Navigation - STACK NAVIGATOR - Docs](https://reactnavigation.org/docs/native-stack-navigator/)

### 1. Using Navigation through Global Typing

_No need comments I guess_

### 2. Using Navigation through Props

Since our `Routes` component returns a `StackRoutes` wrapped in a `NavigationContainer` which is a Context that shares a prop routes, meaning, we can access the navigation through the component's props.

We need to create the `StackRoutesList` type in the `StackRoutes` component to be used as a generic type for the `createNativeStackNavigator` function.

In our component, we can do something like this:

```tsx
// src/app/Home.tsx

// We pass to the NativeStackScreenProps the type of the routes we created and the name of the route we are now.
type Props = NativeStackScreenProps<StackRoutesList, "home">;
```

And then, we can use the `navigation` prop in our component.

[Check this PR with this approach here](https://github.com/gabrielgyns/react-native-navigation/pull/1).

OBS.: I left the global typing, but we wouldn't need it in this case.

### 3. Making point 2 more Dynamic

[Check this PR with the changes here](https://github.com/gabrielgyns/react-native-navigation/pull/2).

## Bottom Tab Navigation

https://github.com/user-attachments/assets/2533b011-5412-4fee-864f-0c5893f46e8b

[PR to the Bottom Tabs here](https://github.com/gabrielgyns/react-native-navigation/pull/3)

[React Navigation - BOTTOM TAB NAVIGATOR - Docs](https://reactnavigation.org/docs/bottom-tab-navigator/)

## Drawer Navigation

https://github.com/user-attachments/assets/b24eab93-cefe-4774-b340-e6d82130a618

[PR to the Drawer here](https://github.com/gabrielgyns/react-native-navigation/pull/4)

[React Navigation - DRAWER NAVIGATOR - Docs](https://reactnavigation.org/docs/drawer-navigator/)
