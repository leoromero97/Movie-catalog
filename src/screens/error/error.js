import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Error(textError) {
  return (
    <View>
      <Text style={styles.text}>{textError}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginVertical: 4,
  },
});
