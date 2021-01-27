// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={icons.Menu}
          style={{
            width: 30,
            height: 30,
            marginLeft: 10,
            tintColor: COLORS.primary,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
