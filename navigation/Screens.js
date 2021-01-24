import React from "react";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ComponentsScreen from "../screens/Components";
import HomeScreen from "../screens/Home";
import OnboardingScreen from "../screens/Onboarding";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";

import CustomDrawerContent from "./Menu";
import { Icon, Header } from "../components";
import { Images, materialTheme } from "../constants/";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: Images.Profile,
  name: "David Adokuru",
  email: "david@gmail.com",
};

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName='Profile' mode='card' headerMode='screen'>
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              transparent
              title='Profile'
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName='Settings'
      mode='card'
      headerMode='screen'
    >
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title='Settings' scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ComponentsStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='Components'
        component={ComponentsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title='Components' scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              tabs
              title='Home'
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name='Pro'
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              transparent
              title=''
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal",
        },
      }}
      initialRouteName='Home'
    >
      <Drawer.Screen
        name='Home'
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='shop'
              family='GalioExtra'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Woman'
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='md-woman'
              family='ionicon'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginLeft: 4, marginRight: 4 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Man'
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='man'
              family='entypo'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Kids'
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='baby'
              family='GalioExtra'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='New Collection'
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='grid-on'
              family='material'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Profile'
        component={ProfileStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='circle-10'
              family='GalioExtra'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='gears'
              family='font-awesome'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: -3 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Components'
        component={ComponentsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='md-switch'
              family='ionicon'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: 2, marginLeft: 2 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Logout'
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name='logout'
              family='ionicon'
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='none'>
      <Stack.Screen
        name='Onboarding'
        component={OnboardingScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name='App' component={AppStack} />
    </Stack.Navigator>
  );
}
