import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface OtpInputProps {
    code: string;
    onCodeChange: (code: string) => void;
    length: number;
    phoneNumber: string;
    isError: boolean;
    errorMessage?: string;
}

export function OtpInput({ code, onCodeChange, length, phoneNumber, isError, errorMessage = 'Incorrect verification code. Try again' }: OtpInputProps) {
    const inputs = useRef<Array<TextInput | null>>([]);
    // Pad the code with spaces so it matches the length exactly
    const codeArray = code.padEnd(length, ' ').split('');

    const handleTextChange = (text: string, index: number) => {
        // Only allow numbers
        const cleanText = text.replace(/[^0-9]/g, '');
        const char = cleanText.slice(-1);

        const newCodeArray = [...codeArray];

        if (char) {
            newCodeArray[index] = char;
            const newCode = newCodeArray.join('').trimEnd();
            onCodeChange(newCode);

            // Auto-advance focus to the next input
            if (index < length - 1) {
                inputs.current[index + 1]?.focus();
            }
        } else {
            newCodeArray[index] = ' ';
            const newCode = newCodeArray.join('').trimEnd();
            onCodeChange(newCode);
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        // Move to previous input on backspace if current is empty
        if (e.nativeEvent.key === 'Backspace' && codeArray[index] === ' ' && index > 0) {
            inputs.current[index - 1]?.focus();

            const newCodeArray = [...codeArray];
            newCodeArray[index - 1] = ' ';
            const newCode = newCodeArray.join('').trimEnd();
            onCodeChange(newCode);
        }
    };

    return (
        <View style={styles.container}>
            {/* Top Header Card */}
            <View style={styles.header}>
                <Text style={styles.flagEmoji}>🇸🇬</Text>
                <Text style={styles.phoneNumber}>{phoneNumber}</Text>
            </View>

            {/* Inputs Card */}
            <View style={styles.inputContainer}>
                {codeArray.map((digit, index) => (
                    <View key={index} style={[styles.cell, index > 0 && styles.cellBorderLeft]}>
                        <TextInput
                            ref={(ref) => { inputs.current[index] = ref; }}
                            style={styles.digitInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit === ' ' ? '' : digit}
                            onChangeText={(text) => handleTextChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            selectTextOnFocus
                            selectionColor="#95E955"
                        />
                    </View>
                ))}
            </View>

            {/* Error Message */}
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
        borderColor: '#EFEFEF',
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
        borderBottomColor: '#EFEFEF',
    },
    flagEmoji: {
        fontSize: 18,
        marginRight: 8,
    },
    phoneNumber: {
        fontSize: 16,
        color: '#000',
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
        borderLeftColor: '#EFEFEF',
    },
    digitInput: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '400',
        color: '#000',
    },
    errorContainer: {
        backgroundColor: '#FFE6E6', // Light red background
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    errorIcon: {
        marginRight: 8,
    },
    errorText: {
        color: '#000',
        fontSize: 14,
    },
});
