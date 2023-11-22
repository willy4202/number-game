import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../styles/theme";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {};
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : styles.innerContainer
        }
        android_ripple={{ color: theme.blue600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 32,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: theme.blue500,

    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2,
    shadowColor: "#00000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
