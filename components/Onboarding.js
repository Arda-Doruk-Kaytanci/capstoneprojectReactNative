import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { setStorage } from "../tools";

function Onboarding() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <View>
      <View>
        <Text>Little Lemon</Text>
        <Text>Chicago</Text>
        <View>
          <Text>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes with a modern twist
          </Text>
          <Image></Image>
        </View>
      </View>
      <Text> </Text>
      <TextInput
        onChangeText={setUsername}
        value={username}
        placeholder="Enter Your Username"
      ></TextInput>
      <Text></Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Your Email"
      ></TextInput>
      <Pressable
        style={styles.button}
        onPress={() => {
          setStorage("email", email);
          setStorage("username", username);
          setStorage("hasLoggedIn", true);
          navigation.navigate("Homepage");
        }}
      ></Pressable>
    </View>
  );
}
export default Onboarding;
export const styles = StyleSheet.create({
  container: {
    flex: 0.4,
  },
  onboarding: {
    flexDirection: "column",
  },
  button: {
    width: 200,
    height: 100,
    borderColor: "black",
    borderWidth: 2,
  },
});
