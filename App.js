import * as React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Search from "./src/components/search/search";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#2196F3",
          },
        }}
      >
        <Stack.Screen
          name="Search Movies"
          options={{
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
