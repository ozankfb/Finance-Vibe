import React, { memo } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { COLORS } from '../theme';

type TitleProps = TextProps & {
  children: React.ReactNode;
};

function TitleComponent({ children, style, ...props }: TitleProps) {
  return (
    <Text {...props} style={[styles.title, style]}>
      {children}
    </Text>
  );
}

export const Title = memo(TitleComponent);

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    lineHeight: 55,
    letterSpacing: -1,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
});
