import React, { useMemo, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { COLORS } from '../theme';

interface OtpInputProps {
  code: string;
  onCodeChange: (code: string) => void;
  length: number;
  phoneNumber: string;
  isError: boolean;
  errorMessage?: string;
}

export function OtpInput({
  code,
  onCodeChange,
  length,
  phoneNumber,
  isError,
  errorMessage = 'Incorrect verification code. Try again',
}: OtpInputProps) {
  const inputs = useRef<Array<TextInput | null>>([]);
  const codeArray = useMemo(() => code.padEnd(length, ' ').split(''), [code, length]);

  const handleTextChange = (text: string, index: number) => {
    const cleanText = text.replace(/[^0-9]/g, '');
    const char = cleanText.slice(-1);
    const newCodeArray = [...codeArray];

    if (char) {
      newCodeArray[index] = char;
      onCodeChange(newCodeArray.join('').trimEnd());

      if (index < length - 1) {
        inputs.current[index + 1]?.focus();
      }
      return;
    }

    newCodeArray[index] = ' ';
    onCodeChange(newCodeArray.join('').trimEnd());
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && codeArray[index] === ' ' && index > 0) {
      inputs.current[index - 1]?.focus();

      const newCodeArray = [...codeArray];
      newCodeArray[index - 1] = ' ';
      onCodeChange(newCodeArray.join('').trimEnd());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.flagEmoji}>🇸🇬</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>

      <View style={styles.inputContainer}>
        {codeArray.map((digit, index) => (
          <View key={index} style={[styles.cell, index > 0 && styles.cellBorderLeft]}>
            <TextInput
              ref={(ref) => {
                inputs.current[index] = ref;
              }}
              style={styles.digitInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit === ' ' ? '' : digit}
              onChangeText={(text) => handleTextChange(text, index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
              selectTextOnFocus
              selectionColor={COLORS.accent}
            />
          </View>
        ))}
      </View>

      {isError && (
        <View style={styles.errorContainer}>
          <Entypo name="info-with-circle" size={16} color="#E42727" style={styles.errorIcon} />
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  flagEmoji: {
    fontSize: 18,
    marginRight: 8,
  },
  phoneNumber: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 64,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellBorderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.border,
  },
  digitInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    color: COLORS.textPrimary,
  },
  errorContainer: {
    backgroundColor: '#FFE6E6',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  errorIcon: {
    marginRight: 8,
  },
  errorText: {
    color: COLORS.textPrimary,
    fontSize: 14,
  },
});
