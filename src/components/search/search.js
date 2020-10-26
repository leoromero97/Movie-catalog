import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  I18nManager,
} from "react-native";

const Search = () => {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);

  return (
    <View style={styles.containerMain}>
      <TextInput
        style={styles.containerInput}
        placeholder="Enter a search term"
      />
      <TouchableOpacity>
        <Image
          style={styles.magnifying}
          source={require("../../../assets/search.png")}
          accessibilityLabel="Search"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    padding: 6,
    width: 300,
  },

  containerInput: {
    borderColor: "#000",
    height: 46,
    width: "90%",
    borderBottomColor: "#665D5C",
    borderBottomWidth: 1,
  },

  magnifying: {
    height: 20,
    width: 20,
  },
});

export default Search;
