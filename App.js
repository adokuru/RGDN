import React from "react";

import { Login, SignUp } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import DrawerNavigationRoutes from "./navigation/DrawerNavigationRoutes";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        {/* Auth Navigator which includer Login Signup will come once */}
        <Stack.Screen
          name='Auth'
          component={Auth}
          options={{ headerShown: false }}
        />

        {/* Drawer Navigation */}
        <Stack.Screen
          name='DrawerNavigationRoutes'
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer as we will use our custom header
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
