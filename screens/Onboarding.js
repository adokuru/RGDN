import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Button, Text, theme, Input } from "galio-framework";

import { materialTheme } from "../constants/";

const { width } = Dimensions.get("screen");
export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block style={styles.background}>
        <Block style={styles.containerLogo}>
          <Image
            source={require("../assets/images/icon1.png")}
            style={styles.logo}
          />
          <Text style={styles.logotext} size={20}>
            Just a step away
          </Text>
        </Block>
        <Block style={styles.inputBlock}>
          <Block>
            <Input
              style={styles.inputSize}
              color='#000'
              placeholder='Username'
              rounded
            />
            <Input
              style={styles.inputSize}
              placeholder='Password'
              rounded
              password
              viewPass
              color='#000'
            />
          </Block>
          <Block>
            <Button
              shadowless
              style={styles.button}
              color={"#032B80"}
              onPress={() => navigation.navigate("App")}
              round
            >
              Login
            </Button>
          </Block>
          <Block>
            <Text style={styles.logotext} size={20}>
              Don’t have a account?{" "}
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("App")}
              >
                <Text color={"#032B80"}>Click here</Text>
              </TouchableWithoutFeedback>
            </Text>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  containerLogo: {
    position: "absolute",
    top: 150,
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: "100%",
    height: 100,
  },
  logotext: {
    top: 25,
  },
  inputSize: {
    width: width - theme.SIZES.BASE * 4,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    top: 10,
  },
  inputBlock: {
    top: 80,
    alignItems: "center",
    width: "100%",
  },
});
