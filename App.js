import * as React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Search from "./src/components/search/search";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search Movies"
          options={{
            title: "Search Movies",
            headerTintColor: "#fff",
            headerTitleStyle: {
              alignSelf: "center",
            },
            headerStyle: {
              backgroundColor: "#2196F3",
            },
            headerBackTitle: { title: "center" },
          }}
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
