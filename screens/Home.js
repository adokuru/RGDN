import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding * 1,
      }}
    >
      <ScrollView>
        <View
          style={{ flexDirection: "row", marginVertical: SIZES.padding * 2 }}
        >
          <View style={{ flex: 1, left: 20 }}>
            <Text style={{ ...FONTS.h1 }}>Hello!</Text>
            <Text style={{ ...FONTS.h2, color: COLORS.gray }}>
              David Adokuru
            </Text>
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
              onPress={() => navigation.navigate("LiveService")}
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
            height: 120,
            borderRadius: 20,
            backgroundColor: COLORS.black,
          }}
        >
          <LinearGradient
            colors={[COLORS.color1, COLORS.color2]}
            style={{ flex: 1, flexDirection: "row", borderRadius: 5 }}
          >
            <View>
              <Image
                source={icons.wallet}
                style={{
                  width: 70,
                  height: 70,
                  marginVertical: SIZES.padding * 2,
                  marginHorizontal: SIZES.padding,
                  tintColor: COLORS.white,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  marginVertical: SIZES.padding * 2,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}
              >
                Earnings
              </Text>
              <Text
                style={{
                  marginVertical: SIZES.padding,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h2,
                }}
              >
                ₦12 487.12
              </Text>
            </View>
          </LinearGradient>

          <StatusBar style='dark' />
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: COLORS.primary,
            marginVertical: SIZES.padding * 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginVertical: SIZES.padding,
                marginHorizontal: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}
            >
              History
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("History")}
            >
              <Text
                style={{
                  marginVertical: SIZES.padding,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body2,
                }}
              >
                See All
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
