import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchMovie from "./src/screens/search/Screensearch";
import screens from "./src/constants/screens";
import ScreenMovie from "./src/screens/movie/ScreenMovie";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#2196F3" },
        }}
      >
        <Stack.Screen
          name={screens.search}
          component={SearchMovie}
          options={{ headerTitleStyle: { alignSelf: "center" } }}
        />
        <Stack.Screen name={screens.movie} component={ScreenMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
