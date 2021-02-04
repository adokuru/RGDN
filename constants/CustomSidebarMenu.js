// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import AsyncStorage from "@react-native-community/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{ fontSize: 25, color: "#fff" }}>
            {"David Adokuru".charAt()}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>David Adokuru</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({ color }) => (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialIcons name='logout' size={24} color='#032B80' />
              <Text
                style={{
                  color: "#032B80",
                  left: 35,
                  top: 2,
                  ...FONTS.body3,
                }}
              >
                Logout
              </Text>
            </View>
          )}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              "Logout",
              "Are you sure? You want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Confirm",
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace("Auth");
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    paddingTop: 40,
    color: "#032B80",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#032B80",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "#032B80",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#032B80",
    marginTop: 15,
  },
});
