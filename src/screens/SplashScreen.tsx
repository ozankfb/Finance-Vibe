import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, Easing } from 'react-native-reanimated';

export function SplashScreen({ onDone }: { onDone: () => void }) {
    const windowWidth = Dimensions.get('window').width;
    const logoSize = windowWidth * 0.45; // Approx 45% of screen width based on reference

    const opacity = useSharedValue(0);
    const translateY = useSharedValue(40);
    const scale = useSharedValue(0.96);
    const shadowOpacity = useSharedValue(0.3);

    useEffect(() => {
        const duration = 900;
        const config = { duration, easing: Easing.out(Easing.cubic) };

        opacity.value = withTiming(1, config);
        translateY.value = withTiming(0, config);
        scale.value = withTiming(1, config);
        shadowOpacity.value = withTiming(0, config); // Fade out shadow to simulate reducing "blur"

        const timer = setTimeout(() => {
            if (onDone) {
                onDone();
            }
        }, duration + 600); // Wait 600ms after 900ms animation finishes

        return () => clearTimeout(timer);
    }, [onDone, opacity, translateY, scale, shadowOpacity]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { translateY: translateY.value },
                { scale: scale.value },
            ],
            shadowOpacity: shadowOpacity.value,
            shadowColor: '#A3E635',
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 20,
            elevation: shadowOpacity.value * 20,
        };
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
                <Animated.View style={animatedStyle}>
                    <Svg width={logoSize} height={logoSize} viewBox="0 0 100 100">
                        <Path
                            d="M30,0 L70,0 L100,30 L100,70 L70,100 L30,100 L0,70 L0,30 Z"
                            fill="#A3E635" // Lime green color matching the reference
                        />
                        <Path
                            d="M36,18 L64,18 L82,36 L82,64 L64,82 L36,82 L18,64 L18,36 Z"
                            fill="#FFFFFF" // White inner cutout
                        />
                    </Svg>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Clean white background
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "5%" // Slight visual offset present in reference
    },
});
