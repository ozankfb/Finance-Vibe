import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Button } from '../components';

export function LaunchHeroScreen({ onNext }: { onNext?: () => void }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Hero Illustration */}
                <View style={styles.illustrationContainer}>
                    <Image
                        source={require('../../assets/hero.png')}
                        style={styles.heroImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Content Section */}
                <View style={styles.contentSection}>
                    <Text style={styles.title}>Optimize smart investments in real time.</Text>

                    <Text style={styles.subtitle}>
                        Your smart investment journey starts now, powered by real-time insights and seamless tracking.
                    </Text>

                    {/* Page Indicator */}
                    <View style={styles.pagination}>
                        <View style={[styles.dot, styles.activeDot]} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionSection}>
                    <Button
                        title="Log in"
                        onPress={onNext}
                    />

                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpText}>
                            Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Clean white background for hero
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24, // Bottom padding for safe area
    },
    illustrationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    heroImage: {
        width: '100%',
        height: '100%',
        maxHeight: 280,
    },
    contentSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 34,
        fontWeight: '800',
        color: '#000',
        textAlign: 'center',
        lineHeight: 42,
        letterSpacing: -0.5,
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 32,
        paddingHorizontal: 16,
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E5E5E5',
        marginHorizontal: 4,
    },
    activeDot: {
        width: 24,
        backgroundColor: '#95E955', // Lime green
    },
    actionSection: {
        width: '100%',
    },
    signUpButton: {
        marginTop: 24,
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
