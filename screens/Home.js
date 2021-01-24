import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button, Block, Text, Input, theme } from "galio-framework";

import { Icon, Product } from "../components/";

const { width } = Dimensions.get("screen");
import products from "../constants/products";

export default class Home extends React.Component {
  render() {
    return (
      <Block>
        <Text>This the Home page</Text>
      </Block>
    );
  }
}
