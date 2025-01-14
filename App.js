import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getItem, setStorage } from "./tools";
import Onboarding from "./components/Onboarding";
import Homepage from "./components/Homepage";
import { Image, Pressable } from "react-native";
import Profile from "./components/Profile";
import { useEffect } from "react";

export default function App() {
  const Stack = createStackNavigator();

  const [hasLoggedIn, setHasLoggedIn] = React.useState(null);

  useEffect(() => {
    async function fetchLoginStatus() {
      const status = await getItem("hasLoggedIn");
      setHasLoggedIn(status);
    }
    fetchLoginStatus();
  }, []);

  if (hasLoggedIn === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasLoggedIn ? "Homepage" : "Onboarding"}
        screenOptions={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text>Go Back</Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen
          component={Onboarding}
          name="Onboarding"
          options={{
            headerRight: null,
          }}
        />
        <Stack.Screen
          component={Homepage}
          name="Homepage"
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Profile");
                }}
                style={{ width: 100, height: 100, borderWidth: 2 }}
              >
                <Image
                  style={{
                    height: 100,
                    width: 50,
                    borderRadius: 40,
                    marginRight: 10,
                  }}
                  resizeMode="stretch"
                  source={require("./img/littlelemon.png")}
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen component={Profile} name="Profile" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
