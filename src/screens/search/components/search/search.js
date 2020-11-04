import React, { useState } from "react";

import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const Search = ({ placeholder, onSearch }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={setText}
      />
      <TouchableOpacity
        onPress={() => {
          onSearch(text);
        }}
      >
        <Image
          style={styles.magnifying}
          source={require("../../../../../assets/search.png")}
          accessibilityLabel="Search"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fafafa",
    padding: 12,
    width: "100%",
  },

  input: {
    height: 46,
    borderBottomColor: "#665D5C",
    borderBottomWidth: 1,
    flexGrow: 1,
  },

  magnifying: {
    height: 20,
    width: 20,
  },
});

export default Search;
