import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "../components";
import { Images, materialTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

export default class Profile extends React.Component {
  render() {
    return (
      <Block>
        <Text>This the profile page</Text>
      </Block>
    );
  }
}
