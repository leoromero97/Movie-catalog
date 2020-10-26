import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const Search = () => {
  const [text, setText] = useState("");
  const [inp, setInp] = useState("");

  return (
    <View style={styles.containerMain}>
      <TextInput
        style={styles.containerInput}
        placeholder="Enter a search term"
        onChange
        Text={setText}
      />
      <TouchableOpacity onPress={() => Alert.alert("button false")}>
        <Image
          style={styles.magnifying}
          source={require("../../../assets/search.png")}
          accessibilityLabel="Magnifyinh search"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
  },

  containerInput: {
    backgroundColor: "#f2f2f2",
    borderColor: "#000",
    height: 46,
    width: 300,
  },

  magnifying: {
    height: 26,
    width: 26,
  },
});

export default Search;
