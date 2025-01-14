import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { clearStorage, getItem, setStorage } from "../tools";
import { styles } from "./Onboarding";

export default function Profile({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [changeMode, setChangeMode] = React.useState(false);

  useEffect(() => {
    async function fetchUserData() {
      const storedUsername = await getItem("username");
      const storedEmail = await getItem("email");
      const storedPhone = await getItem("phone");
      setUsername(storedUsername || "");
      setEmail(storedEmail || "");
      setPhone(storedPhone || "");
    }
    fetchUserData();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Personal Info
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => setChangeMode((prevMode) => !prevMode)}
      >
        <Text style={{ color: "white" }}>
          {changeMode ? "Exit Change Mode" : "Enter Change Mode"}
        </Text>
      </Pressable>

      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          marginVertical: 20,
        }}
        resizeMode="stretch"
        source={require("../img/littlelemon.png")}
      />

      {changeMode ? (
        <>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              setStorage("email", email);
              setStorage("username", username);
              setStorage("phone", phone);
              setChangeMode(false);
            }}
          >
            <Text style={{ color: "white" }}>Save Changes</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              setEmail("");
              setUsername("");
              setPhone("");
              setChangeMode(false);
            }}
          >
            <Text style={{ color: "white" }}>Discard Changes</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text>Username: {username}</Text>
          <Text>Email: {email}</Text>
          <Text>Phone: {phone}</Text>
        </>
      )}

      <Pressable
        style={[styles.button, { backgroundColor: "red", marginTop: 20 }]}
        onPress={async () => {
          await clearStorage();
          await setStorage("hasLoggedIn", false);
          navigation.navigate("Onboarding");
        }}
      >
        <Text style={{ color: "white" }}>Log Out</Text>
      </Pressable>
    </View>
  );
}
