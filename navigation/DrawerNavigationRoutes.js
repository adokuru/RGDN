// Import React
import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomSidebarMenu from "../constants/CustomSidebarMenu";
import NavigationDrawerHeader from "../constants/NavigationDrawerHeader";

// Import Screens
import { Home, Wallet, LiveService, History, FAQ } from "../screens";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Home", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#fff", //Set Header color
          },
          headerTintColor: "#111", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='SettingsScreen'
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#032B80", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={{
          title: "Settings", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#cee1f2",
        color: "#cee1f2",
        itemStyle: { marginVertical: 5, color: "white" },
        labelStyle: {
          color: "#d8d8d8",
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name='Home'
        options={{ drawerLabel: "Home" }}
        component={HomeStack}
      />
      <Drawer.Screen
        name='Wallet'
        options={{ drawerLabel: "Wallet" }}
        component={Wallet}
      />
      <Drawer.Screen
        name='LiveService'
        options={{ drawerLabel: "LiveService" }}
        component={LiveService}
      />
      <Drawer.Screen
        name='History'
        options={{ drawerLabel: "History" }}
        component={History}
      />
      <Drawer.Screen
        name='FAQStack'
        options={{ drawerLabel: "FAQ Screen" }}
        component={FAQ}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
