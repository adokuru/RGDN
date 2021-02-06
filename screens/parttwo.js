import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { Input, Block } from "galio-framework";

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  function renderLogo() {
    return (
      <View>
        <View
          style={{
            height: 120,
            borderRadius: 20,
            backgroundColor: COLORS.primary,
          }}
        >
          <LinearGradient
            colors={[COLORS.color1, COLORS.color2]}
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              borderRadius: 5,
            }}
          >
            <View>
              <Text
                style={{
                  marginHorizontal: SIZES.padding,
                  marginVertical: SIZES.padding,

                  color: COLORS.white,
                  ...FONTS.h1,
                }}
              >
                WALLET
              </Text>
            </View>
            <View
              style={{
                marginVertical: SIZES.padding * 3,
              }}
            >
              <Text
                style={{
                  marginHorizontal: SIZES.padding,
                  marginVertical: SIZES.padding,

                  color: COLORS.white,
                  ...FONTS.body3,
                }}
              >
                Available Balance
              </Text>
              <Text
                style={{
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h2,
                }}
              >
                ₦12 487.12
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    );
  }

  function renderForm() {
    return (
      <View>
        {/* Account Name */}
        <View>
          <Input
            style={{
              color: COLORS.black,
              ...FONTS.body3,
            }}
            rounded
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
            rounded
            label='Account Number'
          />
        </View>
        {/*  */}
        <View>
          <Input
            style={{
              color: COLORS.black,
              ...FONTS.body3,
            }}
            type='numeric'
            rounded
            label='Bank'
          />
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ margin: SIZES.padding * 3 }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius / 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.replace("DrawerNavigationRoutes")}
          // onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>WITHDRAW</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          paddingHorizontal: SIZES.padding * 1,
        }}
      >
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
                backgroundColor: COLORS.white,
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
        <View></View>
        <LinearGradient
          colors={[COLORS.white, COLORS.white]}
          style={{ flex: 1 }}
        >
          <ScrollView>
            {renderLogo()}
            <View style={{ Top: 40 }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: "normal",
                  marginVertical: SIZES.padding,
                  ...FONTS.h1,
                }}
              >
                Withdrawal
              </Text>
            </View>
            {renderForm()}
            {renderButton()}
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
