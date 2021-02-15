import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import styled from "styled-components";
import { COLORS, FONTS, icons } from "../constants";
import Text from "../constants/Text";
import Loader from "../constants/Loader";

export default function History({ navigation }) {
  const [historyListData, setHistoryListData] = useState([]);
  let name = global.uDm;
  let refnum = global.refnum;
  const [loading, setLoading] = useState(false);
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  useEffect(() => {
    setLoading(true);
    fetch("https://rgdn.org/api/myHistory.php", {
      method: "POST",
      body: JSON.stringify({
        referralLink: refnum,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let ListData = responseJson.historyData.map((item) => {
          return {
            amount: item.amount,
            name: item.name,
            date: item.created,
            key: "_" + Math.random().toString(36).substr(2, 9),
          };
        });
        setHistoryListData(ListData);
        setLoading(false);
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        alert("Please Check Internet Connection");
      });
  }, []);

  console.log(historyListData[0]);

  const renderPurchase = () => (
    <Purchase>
      <PurchaseInfo>
        <Text heavy>{historyListData[0].name}</Text>

        <Text small color='#111111'>
          {historyListData[0].date}
        </Text>
      </PurchaseInfo>
      <Text heavy>₦{historyListData[0].amount}</Text>
    </Purchase>
  );

  return (
    <Container>
      <Loader loading={loading} />
      <StatusBar barStyle='light-content' />
      <Header>
        <TouchableOpacity onPress={toggleDrawer}>
          <ProfilePhoto
            source={{
              uri: `https://ui-avatars.com/api/?background=FFFFFF&color=000&name=${name}`,
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
            History
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
      <Purchases
        ListHeaderComponent={
          <>
            <TransactionsHeader>
              <Text style={{ ...FONTS.h3, color: COLORS.black }}>History</Text>
            </TransactionsHeader>

            <SearchContainer></SearchContainer>
          </>
        }
        data={historyListData}
        renderItem={renderPurchase}
        showsVerticalScrollIndicator={false}
      />
      {Platform.OS === "ios" ? (
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
      ) : null}
    </Container>
  );
}
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
