import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../styles/theme";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderColor: theme.blue600,
    borderWidth: 2,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 16 : 32,
    margin: deviceWidth < 380 ? 16 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.blue400,
    fontSize: 36,
    fontWeight: "bold",
  },
});
