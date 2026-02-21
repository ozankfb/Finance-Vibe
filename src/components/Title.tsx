import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";

type TitleProps = TextProps & {
  children: React.ReactNode;
};

export function Title({ children, style, ...props }: TitleProps) {
  return (
    <Text {...props} style={[styles.title, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    lineHeight: 55,
    letterSpacing: -1,
    fontWeight: "500",
    color: "#000000",
  },
});