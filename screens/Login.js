import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, SIZES, FONTS, icons, images } from "../constants";

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.padding * 6,
          paddingHorizontal: SIZES.padding * 2,
        }}
        onPress={() => console.log("Sign Up")}
      >
        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.black,
            ...FONTS.h4,
          }}
        ></Text>
      </TouchableOpacity>
    );
  }

  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.RgdnLogo}
          resizeMode='contain'
          style={{
            width: "80%",
          }}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3,
        }}
      >
        {/* Full Name */}
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.black,
              ...FONTS.body3,
            }}
            placeholder='Username'
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
          />
        </View>

        {/* Password */}
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.black,
              ...FONTS.body3,
            }}
            placeholder='Enter Password'
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
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
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient colors={[COLORS.white, COLORS.white]} style={{ flex: 1 }}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          <View style={{ alignItems: "center", Top: 40 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h2 }}>
              Just a step way
            </Text>
          </View>
          {renderForm()}
          {renderButton()}
          <View style={{ alignItems: "center", Top: 40 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h2 }}>
              Don’t have a account?{" "}
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Signup")}
              >
                <Text color={"#032B80"}>Click here</Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
