import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../styles/theme";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: 40,
    color: theme.blue600,
    borderColor: theme.blue600,
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
  },
});
