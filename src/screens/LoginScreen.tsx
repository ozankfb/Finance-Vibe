import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Button } from '../components';

export function LoginScreen({ onBack, onLogin }: { onBack: () => void; onLogin?: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

                        {/* Title Section */}
                        <Text style={styles.title}>Glad to see you again</Text>
                        <Text style={styles.subtitle}>Log in to your account.</Text>

                        {/* Inputs */}
                        <View style={styles.inputContainer}>
                            <View style={styles.inputWrapper}>
                                <AntDesign name="mail" size={20} color="#999" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor="#999"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={setEmail}
                                    selectionColor="#95E955"
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <AntDesign name="lock" size={20} color="#999" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#999"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                    selectionColor="#95E955"
                                />
                            </View>
                        </View>

                        {/* Login Button */}
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Log in"
                                onPress={onLogin}
                                disabled={!email || !password}
                            />
                        </View>

                        {/* Divider */}
                        <View style={styles.dividerContainer}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>Or continue with</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        {/* Social Buttons */}
                        <View style={styles.socialContainer}>
                            <TouchableOpacity style={styles.socialButton}>
                                <AntDesign name="google" size={24} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialButton}>
                                <AntDesign name="apple" size={24} color="#000" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.spacer} />

                        {/* Footer */}
                        <TouchableOpacity style={styles.signUpButton}>
                            <Text style={styles.signUpText}>
                                Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto', // Expo defaults to SF Pro on iOS
        fontSize: 36,
        fontWeight: '500', // Medium
        lineHeight: 46,
        maxWidth: 331,
        paddingLeft: 20,
        color: '#000',
        marginBottom: 8,
        letterSpacing: 0,
    },
    subtitle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '400', // Regular
        lineHeight: 25,
        letterSpacing: -0.16, // -1% of 16
        color: '#777777',
        paddingLeft: 20,
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 40,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        height: 56,
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        height: '100%',
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
    },
    buttonContainer: {
        marginBottom: 40,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#EFEFEF',
    },
    dividerText: {
        color: '#999',
        paddingHorizontal: 16,
        fontSize: 14,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16, // using gap for React Native v0.71+
    },
    socialButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    spacer: {
        flex: 1,
    },
    signUpButton: {
        marginBottom: 24,
        alignItems: 'center',
        paddingVertical: 12,
    },
    signUpText: {
        fontSize: 16,
        color: '#666',
    },
    signUpLink: {
        color: '#000',
        fontWeight: '600',
    },
});
