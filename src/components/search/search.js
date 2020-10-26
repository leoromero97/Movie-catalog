import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const Search = () => {

  return (
    <View style={styles.containerMain}>
      <TextInput
        style={styles.containerInput}
        placeholder={"Enter a search menu"}
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
    height: 46,
    borderBottomColor: "#665D5C",
    borderBottomWidth: 1,
  },

  magnifying: {
    height: 20,
    width: 20,
  },
});

export default Search;
