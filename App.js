import * as React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchMovie from "./src/screens/Screensearch";
import Movie from "./src/screens/movie/movie";

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
          name="Search Movies"
          component={SearchMovie}
          options={{ headerTitleStyle: { alignSelf: "center" } }}
        />
        <Stack.Screen name="Movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
