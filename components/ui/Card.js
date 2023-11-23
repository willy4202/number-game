import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import theme from "../../styles/theme";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: theme.blue700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#00000",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
