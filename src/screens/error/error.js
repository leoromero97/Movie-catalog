import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Error({ textError }) {
  return (
    <View>
      <Text style={styles.text}>{textError}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: "#f2f2f2",
    textAlign: "center",
    fontWeight: "bold",
  },
});
