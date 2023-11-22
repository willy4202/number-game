import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <Pressable>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
