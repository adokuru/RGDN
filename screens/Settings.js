import React from "react";
import {
  StyleSheet,
  Switch,
  FlatList,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";

import materialTheme from "../constants/Theme";

export default class Settings extends React.Component {
  state = {};

  render() {
    return (
      <Block>
        <Text>This the profile page</Text>
      </Block>
    );
  }
}
