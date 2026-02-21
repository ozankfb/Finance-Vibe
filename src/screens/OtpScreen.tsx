import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button, OtpInput } from '../components';

export function OtpScreen({ onBack, onNext }: { onBack: () => void; onNext?: () => void }) {
    const [code, setCode] = useState('');
    const [isError, setIsError] = useState(false);

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
        if (newCode === '4289') {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    const handleNext = () => {
        if (code.length === 4 && !isError) {
            if (onNext) {
                onNext();
            } else {
                Alert.alert('Success', 'OTP Verified!');
            }
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        {/* Header Back Button */}
                        <TouchableOpacity style={styles.backButton} onPress={onBack}>
                            <Entypo name="chevron-left" size={24} color="#000" />
                            <Text style={styles.backText}>Back</Text>
                        </TouchableOpacity>

                        {/* Title */}
                        <Text style={styles.title}>Enter the code we{'\n'}sent to you</Text>

                        {/* OTP Input Card */}
                        <View style={styles.inputSection}>
                            <OtpInput
                                code={code}
                                onCodeChange={handleCodeChange}
                                length={4}
                                phoneNumber="+65 9123-4567"
                                isError={isError}
                            />

                            <View style={styles.resendContainer}>
                                <Text style={styles.resendText}>I didn't receive a code </Text>
                                <Text style={styles.timerText}>01:23</Text>
                            </View>
                        </View>

                        <View style={styles.spacer} />

                        {/* Action Button */}
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Next"
                                onPress={handleNext}
                                disabled={code.length < 4 || isError}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F5', // Light gray background matching reference
    },
    keyboardAvoidingContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
        marginLeft: -8, // Adjust offset for icon padding
    },
    backText: {
        fontSize: 18,
        color: '#000',
        marginLeft: -4,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        color: '#000',
        marginBottom: 40,
        lineHeight: 40,
    },
    inputSection: {
        marginBottom: 24,
    },
    resendContainer: {
        flexDirection: 'row',
        marginTop: 24,
    },
    resendText: {
        fontSize: 14,
        color: '#666',
    },
    timerText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
    },
    spacer: {
        flex: 1,
    },
    buttonContainer: {
        marginBottom: 24,
    },
});
