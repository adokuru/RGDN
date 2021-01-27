import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding * 1,
      }}
    >
      <View style={{ flexDirection: "row", marginVertical: SIZES.padding * 2 }}>
        <View style={{ flex: 1, left: 20 }}>
          <Text style={{ ...FONTS.h1 }}>Hello!</Text>
          <Text style={{ ...FONTS.h2, color: COLORS.gray }}>David Adokuru</Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.lightGray,
            }}
          >
            <Image
              source={icons.LiveStream}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.primary,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 130,
          borderRadius: 20,
          backgroundColor: COLORS.lightyellow,
        }}
      >
        <LinearGradient
          colors={[COLORS.color1, COLORS.color2]}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <View></View>
          <View>
            <Text>Earnings</Text>
            <Text>₦12 487.12</Text>
          </View>
        </LinearGradient>
        <StatusBar style='dark' />
      </View>
    </SafeAreaView>
  );
};
export default Home;
