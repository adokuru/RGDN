import React, { useState } from "react";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { COLORS, SIZES, FONTS, icons, images, TITLE } from "../constants";
import DropDownPicker from "react-native-dropdown-picker";
import Loader from "../constants/Loader";

const SignUp = ({ navigation }) => {
  const [zones, setZones] = React.useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [church, setChurch] = useState("");
  const [ministry, setMinistry] = useState("");
  const [mobile, setMobile] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const [loading, setLoading] = useState(false);
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
    if (!title) {
      alert("Please select Title");
      return;
    }
    if (!name) {
      alert("Please fill Name");
      return;
    }
    if (!church) {
      alert("Please fill Church");
      return;
    }
    if (!ministry) {
      alert("Please fill Ministry");
      return;
    }
    if (!mobile) {
      alert("Please fill Phone Number");
      return;
    }
    setLoading(true);

    fetch("https://rgdn.org/api/createAccount.php", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        name: name,
        ministry: ministry,
        church: church,
        email: userEmail,
        mobile: mobile,
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
        // If server response message same as Data Matched
        if (responseJson.success === "200") {
          //Store variable
          alert("Sign Up Completed");
          navigation.replace("Login");
          return;
        } else {
          setErrortext(responseJson.message);
          alert(responseJson.message);
          return;
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
      });
  };
  React.useEffect(() => {
    fetch("https://rgdn.org/api/getZone.php")
      .then((response) => response.json())
      .then((data) => {
        let zoneData = data.zoneData;
        let zone = zoneData.map((item) => {
          return {
            label: item.value,
            value: item.key,
          };
        });
        setZones(zone);
      });
  }, []);

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
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          source={icons.back}
          resizeMode='contain'
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.black,
          }}
        />

        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.black,
            ...FONTS.h4,
          }}
        >
          Sign Up
        </Text>
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
            width: "60%",
          }}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.padding * 2,
        }}
      >
        {/* Title */}
        <View
          style={
            Platform.OS === "ios" ? { Top: 40, zIndex: 99999 } : { Top: 40 }
          }
        >
          <DropDownPicker
            items={TITLE.data}
            label='Title'
            placeholder='Select Title'
            onChangeItem={(item) => setTitle(item.value)}
            containerStyle={{
              marginTop: "5%",
              height: 50,
              flex: 1,
            }}
            placeholderStyle={{
              color: COLORS.black,
              ...FONTS.body3,
              right: 12,
            }}
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: "#ffffff",
              color: COLORS.black,
              borderRadius: 0,
              justifyContent: "flex-start",
              borderColor: "transparent",
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              color: COLORS.black,
              ...FONTS.body3,
            }}
            dropDownMaxHeight={100}
            itemStyle={{
              justifyContent: "flex-start",
              color: COLORS.black,
              ...FONTS.body3,
            }}
            dropDownStyle={{ backgroundColor: "#fff" }}
          />
        </View>

        {/* Full Name */}
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
            onChangeText={(name) => setName(name)}
            placeholder='Enter Full Name'
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
          />
        </View>

        {/* Zones */}
        <View
          style={
            Platform.OS === "ios" ? { Top: 40, zIndex: 99999 } : { Top: 40 }
          }
        >
          <DropDownPicker
            items={zones}
            label='Title'
            placeholder='Zone / Ministry Center'
            onChangeItem={(item) => setMinistry(item.value)}
            containerStyle={{
              marginTop: "5%",
              height: 50,
              flex: 1,
            }}
            placeholderStyle={{
              color: COLORS.black,
              ...FONTS.body3,
              right: 12,
            }}
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: "#ffffff",
              color: COLORS.black,
              justifyContent: "flex-start",
              borderColor: "transparent",
              borderBottomColor: COLORS.black,
              borderBottomWidth: 1,
              color: COLORS.black,
              ...FONTS.body3,
            }}
            dropDownMaxHeight={150}
            itemStyle={{
              justifyContent: "flex-start",
              color: COLORS.black,
              ...FONTS.body3,
            }}
            dropDownStyle={{ backgroundColor: "#fff" }}
          />
        </View>
        {/* Church Name */}
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
            onChangeText={(Church) => setChurch(Church)}
            placeholder='Church Name'
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
          />
        </View>
        {/* Email Address */}
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
            underlineColorAndroid='#f000'
            blurOnSubmit={false}
            placeholder='Email Address'
            placeholderTextColor={COLORS.black}
            selectionColor={COLORS.black}
          />
        </View>
        {/* Mobile Number */}
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
            onChangeText={(mobile) => setMobile(mobile)}
            autoCapitalize='none'
            keyboardType='numeric'
            returnKeyType='next'
            underlineColorAndroid='#f000'
            blurOnSubmit={false}
            placeholder='Mobile Number'
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
            onChangeText={(password) => setUserPassword(password)}
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
          onPress={handleSubmitPress}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <Loader loading={loading} />
      <LinearGradient colors={[COLORS.white, COLORS.white]} style={{ flex: 1 }}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
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
        </ScrollView>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
