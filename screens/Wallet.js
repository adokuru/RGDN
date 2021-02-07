import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import Text from "../constants/Text";
import { Input, Block } from "galio-framework";
import DropDownPicker from "react-native-dropdown-picker";

export default function Wallet({ navigation }) {
  const [banks, setBanks] = React.useState([]);
  const [bank, setBank] = React.useState("");
  React.useEffect(() => {
    fetch("https://api.paystack.co/bank", {
      headers: {
        Authorization: "sk_test_e9fb5e05e874d6df6da7625b0c9ca42394a12e52",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let BankData = data.data.map((item) => {
          return {
            currency: item.currency,
            label: item.name,
            value: item.name,
            key: item.code,
            slug: item.slug,
          };
        });
        setBanks(BankData);
      });
  }, []);

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  function renderForm() {
    return (
      <View>
        <View style={{ Top: 40, zIndex: 99999 }}>
          <DropDownPicker
            items={banks}
            label='Bank'
            placeholder='Select a Bank'
            onChangeItem={(item) => console.log(item.key, item.value)}
            containerStyle={{
              marginTop: "5%",
              height: 50,
              flex: 1,
            }}
            style={{
              backgroundColor: "#ffffff",
              color: "#111111",
              borderRadius: SIZES.radius / 1.5,
              justifyContent: "flex-start",
            }}
            dropDownMaxHeight={100}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
          />
        </View>
        <View>
          <Input
            style={{
              color: COLORS.black,
              ...FONTS.body3,
            }}
            label='Account Name'
          />
        </View>

        {/* Account Number */}
        <View>
          <Input
            style={{
              color: COLORS.black,
              ...FONTS.body3,
            }}
            type='numeric'
            label='Account Number'
          />
        </View>

        <View>
          <Input
            style={{
              color: COLORS.black,
              ...FONTS.body3,
            }}
            type='numeric'
            label='Amount'
          />
        </View>
      </View>
    );
  }
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
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>WITHDRAW</Text>
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
            Wallet
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

      <LinearGradient colors={[COLORS.white, COLORS.white]} style={{ flex: 1 }}>
        <View
          style={{
            marginHorizontal: SIZES.padding,
            marginVertical: SIZES.padding * 2,
            backgroundColor: COLORS.white,
          }}
        >
          <ScrollView>
            <View style={{ Top: 40 }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: "normal",
                  marginVertical: SIZES.padding,
                  ...FONTS.h2,
                }}
              >
                Withdrawal
              </Text>
            </View>
            <KeyboardAvoidingView>
              {renderForm()}
              {renderButton()}
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </LinearGradient>

      <StatusBar barStyle='light-content' />
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

const PurchaseInfo = styled.View``;

const StatusBar = styled.StatusBar``;
