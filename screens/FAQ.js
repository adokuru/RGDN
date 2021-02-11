import React, { useEffect, useState } from "react";
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

export default function FAQ({ navigation }) {
  let name = global.uDm;
  const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Container>
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
            FAQs
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
    </Container>
  );
}
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
