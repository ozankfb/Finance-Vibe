import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from '../components';

export function CountryScreen({ onBack, onNext }: { onBack: () => void; onNext?: () => void }) {
    const [phone, setPhone] = useState('');

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
                        <Text style={styles.title}>Enter your phone{'\n'}number</Text>

                        {/* Phone Input Card */}
                        <View style={styles.inputCard}>
                            {/* Country Selector */}
                            <TouchableOpacity style={styles.countryRow}>
                                <Text style={styles.flagEmoji}>🇸🇬</Text>
                                <Text style={styles.countryName}>Singapore</Text>
                                <Entypo name="arrow-right" size={20} color="#000" style={styles.arrowIcon} />
                            </TouchableOpacity>

                            <View style={styles.divider} />

                            {/* Number Input */}
                            <View style={styles.numberRow}>
                                <Text style={styles.countryCode}>+65</Text>
                                <TextInput
                                    style={styles.phoneInput}
                                    keyboardType="phone-pad"
                                    placeholder="Add your number"
                                    placeholderTextColor="#999"
                                    value={phone}
                                    onChangeText={setPhone}
                                    selectionColor="#95E955"
                                />
                            </View>
                        </View>

                        <View style={styles.spacer} />

                        {/* Action Button */}
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Next"
                                onPress={onNext}
                                disabled={phone.length < 8} // Arbitrary simple validation
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
        backgroundColor: '#F5F5F7', // Light gray background matching reference
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
        marginBottom: 40,
        marginLeft: -8, // Adjust offset for icon padding
    },
    backText: {
        fontSize: 18,
        color: '#000',
        marginLeft: -4,
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 36,
        fontWeight: '500',
        color: '#000',
        marginBottom: 40,
        lineHeight: 44,
        letterSpacing: -0.5,
    },
    inputCard: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        overflow: 'hidden',
    },
    countryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        height: 64,
    },
    flagEmoji: {
        fontSize: 20,
        marginRight: 12,
    },
    countryName: {
        flex: 1,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
    },
    arrowIcon: {
        opacity: 1,
    },
    divider: {
        height: 1,
        backgroundColor: '#F2F2F2',
    },
    numberRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 64,
    },
    countryCode: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        color: '#666',
        marginRight: 24,
    },
    phoneInput: {
        flex: 1,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        color: '#000',
        height: '100%',
    },
    spacer: {
        flex: 1,
    },
    buttonContainer: {
        marginBottom: 24, // Matches standard bottom padding without fake keyboard
    },
});
