import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../styles/theme";

const GuessLogItem = ({ roundNumber, guessNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text> 예상한 숫자 : {guessNumber}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: theme.blue800,
    borderWidth: 2,
    borderRadius: 32,
    padding: 16,
    marginVertical: 8,
    backgroundColor: theme.yellow200,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.24,
    shadowRadius: 3,
  },
});
