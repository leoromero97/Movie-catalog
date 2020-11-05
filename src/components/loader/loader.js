import React from "react";
import { StyleSheet, Animated } from "react-native";

export default function Loader() {
  return (
    <Animated.View style={styles.continerAnimation}>
      <Animated.Text style={styles.text}>Loading</Animated.Text>
      <Animated.View style={styles.circles}></Animated.View>
      <Animated.View style={styles.circles}></Animated.View>
      <Animated.View style={styles.circles}></Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  continerAnimation: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#303030",
  },

  text: {
    fontSize: 20,
    color: "#f2f2f2",
    margin: 14,
  },

  circles: {
    width: 10,
    height: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    margin: 10,
  },
});
