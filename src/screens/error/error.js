import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Error({ textError }) {
  return <Text style={styles.text}>{textError}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: "#f2f2f2",
    textAlign: "center",
    fontWeight: "bold",
  },
});
