import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export function SplashScreen({ onDone }: { onDone: () => void }) {
    const windowWidth = Dimensions.get('window').width;
    const logoSize = windowWidth * 0.45; // Approx 45% of screen width based on reference

    useEffect(() => {
        const timer = setTimeout(() => {
            if (onDone) {
                onDone();
            }
        }, 900);
        return () => clearTimeout(timer);
    }, [onDone]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
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
