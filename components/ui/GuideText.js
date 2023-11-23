import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../styles/theme";

/** Rn은 계단식 스타일링 적용이 되지 않음.
 * 따라서, style prop을 받아서 하위 컴포넌트에 다르게 적용해줄 수 있음.
 * RN 컴포넌트에 내장된 style 속성은 객체뿐만 아니라 배열도 취할 수 있고, 인덱스가 낮은순부터 파싱되기 때문에
 * 우측에 style prop을 둔다면 이전 속성을 덮어쓸 수 있음.
 */
const GuideText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default GuideText;

const styles = StyleSheet.create({
  instructionText: {
    color: theme.yellow300,
    fontSize: 24,
  },
});
