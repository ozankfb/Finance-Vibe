import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from '../components';

export function SuccessScreen({ onBack, onContinue }: { onBack: () => void; onContinue?: () => void }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Entypo name="chevron-left" size={24} color="#000" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>

                <View style={styles.content}>
                    {/* Large Green Check Illustration */}
                    <View style={styles.illustrationContainer}>
                        <Image
                            source={require('../../assets/success_check.png')} // We'll assume this exists or use a placeholder
                            style={styles.checkImage}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Typography Section */}
                    <Text style={styles.title}>Thanks, Galuh!{'\n'}You're all set</Text>
                    <Text style={styles.subtitle}>
                        Your smart investment journey starts{'\n'}
                        now, powered by real-time insights and{'\n'}
                        seamless tracking.
                    </Text>
                </View>

                {/* Continue Button */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="Continue"
                        onPress={onContinue}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    illustrationContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: -80, // Offset to push it slightly up visually
    },
    checkImage: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 34,
        fontWeight: '800',
        color: '#000',
        textAlign: 'center',
        marginBottom: 16,
        letterSpacing: -0.5,
        lineHeight: 42,
    },
    subtitle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        color: '#8A8A8E',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 16,
    },
    buttonContainer: {
        marginBottom: 24,
    },
});
