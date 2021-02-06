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
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.padding * 1,
      }}
    >
      <ScrollView>
        <View
          style={{ flexDirection: "row", marginVertical: SIZES.padding * 2 }}
        >
          <View style={{ flex: 1, left: 20 }}>
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>Hello!</Text>
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
              }}
              onPress={() => navigation.navigate("LiveService")}
            >
              <Image
                source={icons.LiveStream}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.white,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              height: 120,
              borderRadius: 20,
              backgroundColor: COLORS.primary,
            }}
          >
            <LinearGradient
              colors={[COLORS.white, COLORS.white]}
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                borderRadius: 5,
              }}
            >
              <View>
                <Image
                  source={icons.wallet}
                  style={{
                    width: 70,
                    height: 70,
                    marginVertical: SIZES.padding * 2,
                    marginHorizontal: SIZES.padding,
                    tintColor: COLORS.color1,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    marginVertical: SIZES.padding * 2,
                    marginHorizontal: SIZES.padding,
                    color: COLORS.primary,
                    ...FONTS.h1,
                  }}
                >
                  Earnings
                </Text>
                <Text
                  style={{
                    marginVertical: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    color: COLORS.black,
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;








<View style={{ flex: 1, height: "100%", width: "100%", backgroundColor: COLORS.primary, marginVertical: SIZES.padding * .5, }}>
<View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", }}>
  <Text style={{ marginVertical: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h2, }}>
    History
  </Text>
</View>
<View>
  <FlatList
    data={[
      { key: "Iso Solomon .O" },
      { key: "Dan" },
      { key: "Dominic" },
      { key: "Jackson" },
      { key: "Nuga Nuga .M" },
    ]}
    renderItem={({ item }) => (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ marginVertical: SIZES.padding, }} >
          <Text
            style={{ marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3, }} >
            {item.key}
          </Text>
          <Text style={{ marginHorizontal: SIZES.padding, color: COLORS.gray, ...FONTS.body3, }}>
            15 Aug 2020
          </Text>
        </View>
        <View>
          <Text style={{ marginVertical: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3, }} >
            ₦900.0
          </Text>
        </View>
      </View>
    )}
  />
</View>
<View style={{ margin: SIZES.padding * 2 }}>
  <TouchableOpacity
    style={{
      height: 50,
      backgroundColor: COLORS.color2,
      // borderRadius: SIZES.radius / 1.5,
      alignItems: "center",
      justifyContent: "center",
    }}
    onPress={() => navigation.navigate("History")}
  >
    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
      View History
    </Text>
  </TouchableOpacity>
</View>
</View>
