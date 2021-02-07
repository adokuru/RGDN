import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styled from "styled-components";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import Text from "../constants/Text";
import purchaseData from "../purchases";
import { Input, Button } from "galio-framework";

export default Home = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimating(false);
  //     //Check if user_id is set or not
  //     //If not then send for Authentication
  //     //else send to Home Screen
  //     AsyncStorage.getItem("user_id").then((value) =>
  //       navigation.replace(value === null ? "Auth" : "DrawerNavigationRoutes")
  //     );
  //   }, 5000);
  // }, []);

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  function renderButton() {
    return (
      <View style={{ margin: SIZES.padding * 1 }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius / 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.replace("DrawerNavigationRoutes")}
          // onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>SPONSOR</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={toggleDrawer}>
          <ProfilePhoto
            source={{
              uri:
                "https://ui-avatars.com/api/?background=FFFFFF&color=000&name=David+Adokuru",
            }}
          />
        </TouchableOpacity>
        <Welcome>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
            }}
          >
            Welcome,
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
            }}
          >
            David Adokuru
          </Text>
        </Welcome>
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
      </Header>

      <Text
        center
        title
        black
        style={{
          color: COLORS.white,
          marginBottom: SIZES.padding,
        }}
      >
        ₦ 0.00
      </Text>
      <Text
        center
        heavy
        color='#fff'
        style={{ marginBottom: SIZES.padding * 2 }}
      >
        Earnings
      </Text>

      <StatusBar barStyle='light-content' />
      <View
        style={{
          flex: "1",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "white",
          borderBottomColor: "#111111",
          borderBottomWidth: 1,
        }}
      >
        <ScrollView
          style={{
            marginVertical: SIZES.padding * 2,
            marginHorizontal: SIZES.padding * 2,
          }}
        >
          <View style={{ Top: 40 }}>
            <Text
              style={{
                color: COLORS.black,
                fontWeight: "normal",
                marginBottom: SIZES.padding,
                ...FONTS.h2,
              }}
            >
              Sponsor Copies
            </Text>
          </View>
          <Input
            placeholder='Tobi David'
            color={COLORS.primary}
            style={{ borderColor: COLORS.primary }}
            placeholderTextColor={COLORS.primary}
            label='Name'
          />

          <Input
            placeholder='xxxx@rgdn.org'
            color={COLORS.primary}
            style={{ borderColor: COLORS.primary }}
            placeholderTextColor={COLORS.primary}
            label='Email'
          />
          <Input
            placeholder='08033XXXXX'
            color={COLORS.primary}
            style={{ borderColor: COLORS.primary }}
            placeholderTextColor={COLORS.primary}
            label='Phone Number'
          />
          <View
            style={{
              flexDirection: "row",
              alignContent: "flex-end",
              marginBottom: SIZES.padding,
              flex: 1,
            }}
          >
            <View style={{ width: "49%" }}>
              <Input
                style={{ width: "49%" }}
                placeholder='100'
                color={COLORS.primary}
                style={{ borderColor: COLORS.primary }}
                placeholderTextColor={COLORS.primary}
                label='No. of copies:'
              />
            </View>
            <View style={{ width: "49%", left: 5 }}>
              <Input
                style={{ width: "49%" }}
                placeholder='₦ 12 487.12'
                color={COLORS.primary}
                style={{ borderColor: COLORS.primary }}
                placeholderTextColor={COLORS.primary}
                label='Price'
              />
            </View>
          </View>

          {renderButton()}
        </ScrollView>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #032b80;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const Chart = styled.View`
  margin: 32px 0;
`;

const Purchases = styled.FlatList`
  background-color: #fff;
  padding: 16px;
`;

const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.View`
  background-color: #111;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 6px;
  margin: 16px 0;
`;

const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  font-family: "Avenir";
  color: #111111;
`;

const Purchase = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #111111;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const PurchaseInfo = styled.View``;

const StatusBar = styled.StatusBar``;
