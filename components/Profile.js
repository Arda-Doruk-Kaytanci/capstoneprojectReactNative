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
  const [changeMode, setChangeMode] = React.useState(false);

  useEffect(() => {
    async function fetchUserData() {
      const storedUsername = await getItem("username");
      const storedEmail = await getItem("email");
      setUsername(storedUsername || "");
      setEmail(storedEmail || "");
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
        style={{ height: 100, width: 100, borderRadius: 50, marginVertical: 20 }}
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
          <Pressable
            style={styles.button}
            onPress={() => {
              setStorage("email", email);
              setStorage("username", username);
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
              setChangeMode(false); 
            }}
          >
            <Text style={{ color: "white" }}>Discard Changes</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text style={{ marginBottom: 10 }}>Username: {username}</Text>
          <Text style={{ marginBottom: 10 }}>Email: {email}</Text>
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
