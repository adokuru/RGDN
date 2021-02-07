// Import React
import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomSidebarMenu from "../constants/CustomSidebarMenu";
import NavigationDrawerHeader from "../constants/NavigationDrawerHeader";
import { MaterialIcons } from "@expo/vector-icons";

// Import Screens
import { Home, Wallet, LiveService, History, FAQ, Copies } from "../screens";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
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

const WalletScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Wallet'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Wallet'
        component={Wallet}
        options={{
          title: "Wallet", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const CopiesScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Copies'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Sponsor Copies'
        component={Copies}
        options={{
          title: "Sponsor Copies", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const HistoryScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='History'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='History'
        component={History}
        options={{
          title: "History", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const LiveServiceScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='LiveService'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='LiveService'
        component={LiveService}
        options={{
          title: "LiveService", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const FAQScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='FAQ'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='FAQ'
        component={FAQ}
        options={{
          title: "FAQ", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#032B80",
        color: "#032B80",
        itemStyle: { marginVertical: 5, color: "032B80" },
        labelStyle: {
          color: "#032B80",
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name='Home'
        options={{
          drawerLabel: "Home",
          drawerIcon: (config) => (
            <MaterialIcons name='home' size={24} color='#032B80' />
          ),
        }}
        component={HomeStack}
      />
      <Drawer.Screen
        name='Wallet'
        options={{
          drawerLabel: "Wallet",
          drawerIcon: (config) => (
            <MaterialIcons
              name='account-balance-wallet'
              size={24}
              color='#032B80'
            />
          ),
        }}
        component={WalletScreenStack}
      />
      <Drawer.Screen
        name='Sponsor Copies'
        options={{
          drawerLabel: "Sponsor Copies",
          drawerIcon: (config) => (
            <MaterialIcons name='book' size={24} color='#032B80' />
          ),
        }}
        component={CopiesScreenStack}
      />
      <Drawer.Screen
        name='LiveService'
        options={{
          drawerLabel: "LiveService",
          drawerIcon: (config) => (
            <MaterialIcons name='live-tv' size={24} color='#032B80' />
          ),
        }}
        component={LiveServiceScreenStack}
      />
      <Drawer.Screen
        name='History'
        options={{
          drawerLabel: "History",
          drawerIcon: (config) => (
            <MaterialIcons name='history' size={24} color='#032B80' />
          ),
        }}
        component={HistoryScreenStack}
      />
      <Drawer.Screen
        name='FAQStack'
        options={{
          drawerLabel: "FAQ Screen",
          drawerIcon: (config) => (
            <MaterialIcons name='question-answer' size={24} color='#032B80' />
          ),
        }}
        component={FAQScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
