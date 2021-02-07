import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styled from "styled-components";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import Text from "../constants/Text";
import purchaseData from "../purchases";

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

  const renderPurchase = ({ item }) => (
    <Purchase>
      <PurchaseInfo>
        <Text heavy>{item.product}</Text>

        <Text small color='#111111'>
          {item.purchaseDate}
        </Text>
      </PurchaseInfo>
      <Text heavy>{item.price}</Text>
    </Purchase>
  );

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
        ₦12 487.12
      </Text>
      <Text
        center
        heavy
        color='#fff'
        style={{ marginBottom: SIZES.padding * 2 }}
      >
        Earnings
      </Text>

      <Purchases
        ListHeaderComponent={
          <>
            <TransactionsHeader>
              <Text style={{ ...FONTS.h3, color: COLORS.black }}>History</Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("History")}
              >
                <Text
                  style={{
                    marginVertical: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    color: COLORS.black,
                    ...FONTS.body4,
                  }}
                >
                  See All
                </Text>
              </TouchableWithoutFeedback>
            </TransactionsHeader>

            <SearchContainer></SearchContainer>
          </>
        }
        data={purchaseData}
        renderItem={renderPurchase}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wallet")}
          style={styles.touchableOpacityStyle}
        >
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={icons.wallet}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={{
              ...styles.floatingButtonStyle,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
      <StatusBar barStyle='light-content' />
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
