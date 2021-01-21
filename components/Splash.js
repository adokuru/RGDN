import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

const bgImage = require("../assets/splashBg.png");
const imgLogo = require("../assets/logo.png");

export default class Splash extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.container}>
        <View style={styles.logoBox}>
          <Image
            source={imgLogo}
            style={{ width: 300, height: 150, resizeMode: "stretch" }}
          />
        </View>
        <StatusBar style='auto' />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    backgroundColor: "#fff",
    opacity: 0.9,
    width: "100%",
    alignItems: "center",
  },
});
