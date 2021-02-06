import React, { useState, createRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import AsyncStorage from "@react-native-community/async-storage";

import Loader from "../constants/Loader";

const Login = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    setLoading(true);

    fetch("https://rgdn.org/api/loginAccount.php", {
      method: "POST",
      body: JSON.stringify({
        emailMobile: userEmail,

        password: userPassword,
      }),
      headers: {
        //Header Defination
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        let user = responseJson.userData[0];
        // If server response message same as Data Matched
        if (responseJson.success === "200") {
          AsyncStorage.setItem("user_id", user.clientID);
          AsyncStorage.setItem("earnings", user.earnings);
          AsyncStorage.setItem("name", user.name);
          AsyncStorage.setItem("mobile", user.mobile);
          AsyncStorage.setItem("email", user.email);
          navigation.replace("DrawerNavigationRoutes");
        } else {
          setErrortext(responseJson.message);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
      });
  };

  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 15,
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
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            autoCapitalize='none'
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid='#f000'
            blurOnSubmit={false}
            placeholder='Email Address'
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
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            placeholder='Enter Password' //12345
            placeholderTextColor={COLORS.black}
            keyboardType='default'
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid='#f000'
            returnKeyType='next'
            // onChangeText={userPassword => this.setState({ userPassword })}
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
            height: 45,
            backgroundColor: COLORS.primary,
            // borderRadius: SIZES.radius / 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleSubmitPress}
          // onPress={this.loginFunction}
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
      <Loader loading={loading} />
      <LinearGradient colors={[COLORS.white, COLORS.white]} style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding * 6,
              paddingHorizontal: SIZES.padding * 2,
            }}
            onPress={() => navigation.navigate("Login")}
          ></View>
          {renderLogo()}
          <View style={{ alignItems: "center", Top: 40 }}>
            <Text style={{ color: COLORS.black, ...FONTS.body2 }}>
              Just a step way
            </Text>
          </View>
          {renderForm()}
          {renderButton()}
          {errortext != "" ? (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                ...FONTS.h2,
              }}
            >
              {errortext}
            </Text>
          ) : null}
          <View style={{ alignItems: "center", Top: 40 }}>
            <Text style={{ color: COLORS.black, ...FONTS.body2 }}>
              Don’t have a account?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ color: COLORS.primary, ...FONTS.body2 }}>
                  Click here
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Login;
