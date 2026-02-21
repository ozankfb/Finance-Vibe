import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Svg, { Path, Line, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

export function MarketScreen() {

    // Since /assets/logos/ does not exist, we render exact-sized grey placeholders as instructed.
    const LogoPlaceholder = () => (
        <View style={styles.brandIcon} />
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Activity</Text>
                <TouchableOpacity>
                    <Feather name="bell" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView bounces={false} style={styles.container} showsVerticalScrollIndicator={false}>

                {/* Top Asset Info */}
                <View style={styles.assetHeaderRow}>
                    <View>
                        <Text style={styles.assetTicker}>NVDA</Text>
                        <Text style={styles.assetPrice}>$ 104,86</Text>
                        <Text style={styles.assetDeltaNum}>+532</Text>
                    </View>
                    <View style={styles.assetPill}>
                        <Text style={styles.assetPillText}>NVDA</Text>
                        <Feather name="arrow-up-right" size={14} color="#4CAF50" style={styles.pillIcon} />
                        <Text style={styles.pillPercent}>2.03%</Text>
                    </View>
                </View>

                {/* Real Chart using react-native-svg */}
                <View style={styles.chartContainer}>
                    <Svg height="100%" width="100%" viewBox="0 0 300 150" preserveAspectRatio="none">
                        <Defs>
                            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                <Stop offset="0" stopColor="#4CAF50" stopOpacity="0.2" />
                                <Stop offset="1" stopColor="#4CAF50" stopOpacity="0.0" />
                            </LinearGradient>
                        </Defs>

                        {/* Horizontal Grid Lines */}
                        <Line x1="0" y1="30" x2="300" y2="30" stroke="#EFEFEF" strokeWidth="1" />
                        <Line x1="0" y1="70" x2="300" y2="70" stroke="#EFEFEF" strokeWidth="1" />
                        <Line x1="0" y1="110" x2="300" y2="110" stroke="#EFEFEF" strokeWidth="1" />
                        <Line x1="0" y1="150" x2="300" y2="150" stroke="#EFEFEF" strokeWidth="1" />

                        {/* Area Fill */}
                        <Path
                            d="M 0 120 L 15 115 L 30 125 L 45 125 L 60 115 L 75 125 L 90 105 L 105 110 L 120 90 L 135 90 L 150 70 L 165 90 L 180 85 L 195 50 L 205 35 L 215 45 L 225 30 L 235 15 L 250 20 L 280 5 L 290 25 L 300 10 L 300 150 L 0 150 Z"
                            fill="url(#grad)"
                        />

                        {/* Line Path */}
                        <Path
                            d="M 0 120 L 15 115 L 30 125 L 45 125 L 60 115 L 75 125 L 90 105 L 105 110 L 120 90 L 135 90 L 150 70 L 165 90 L 180 85 L 195 50 L 205 35 L 215 45 L 225 30 L 235 15 L 250 20 L 280 5 L 290 25 L 300 10"
                            stroke="#4CAF50"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinejoin="round"
                        />

                        {/* Dashed Vertical Line */}
                        <Line
                            x1="205"
                            y1="40"
                            x2="205"
                            y2="150"
                            stroke="#000"
                            strokeWidth="1"
                            strokeDasharray="4, 4"
                        />

                        {/* Green Dot */}
                        <Circle
                            cx="205"
                            cy="35"
                            r="4"
                            fill="#4CAF50"
                            stroke="#FFF"
                            strokeWidth="2"
                        />
                    </Svg>

                    {/* Tooltip Bubble */}
                    <View style={styles.chartTooltip}>
                        <Text style={styles.tooltipText}>101,86</Text>
                    </View>
                </View>

                {/* Stocks Grid Section */}
                <Text style={styles.sectionTitle}>Stocks</Text>
                <View style={styles.gridContainer}>

                    {/* Tesla Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <LogoPlaceholder />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-down-right" size={14} color="#E53935" />
                                <Text style={[styles.cardDeltaText, { color: '#E53935' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Tesla Inc</Text>
                        <Text style={styles.stockTicker}>TSLA</Text>
                        <View style={styles.facesRow}>
                            <View style={[styles.faceStack, { backgroundColor: '#E0E0E0', zIndex: 3 }]} />
                            <View style={[styles.faceStack, { backgroundColor: '#BDBDBD', zIndex: 2, marginLeft: -12 }]} />
                            <View style={[styles.faceStack, { backgroundColor: '#9E9E9E', zIndex: 1, marginLeft: -12 }]} />
                        </View>
                        <Text style={styles.socialProofText}>Your friends invested in this company</Text>
                    </View>

                    {/* Microsoft Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <LogoPlaceholder />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-up-right" size={14} color="#4CAF50" />
                                <Text style={[styles.cardDeltaText, { color: '#4CAF50' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Microsoft Inc</Text>
                        <Text style={styles.stockTicker}>MSFT</Text>
                        <View style={styles.facesRow}>
                            <View style={[styles.faceStack, { backgroundColor: '#E0E0E0', zIndex: 3 }]} />
                            <View style={[styles.faceStack, { backgroundColor: '#BDBDBD', zIndex: 2, marginLeft: -12 }]} />
                            <View style={[styles.faceStack, { backgroundColor: '#9E9E9E', zIndex: 1, marginLeft: -12 }]} />
                        </View>
                        <Text style={styles.socialProofText}>Your friends invested in this company</Text>
                    </View>

                    {/* GoTo Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <LogoPlaceholder />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-up-right" size={14} color="#4CAF50" />
                                <Text style={[styles.cardDeltaText, { color: '#4CAF50' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Gojek Tokopedia Tbk</Text>
                        <Text style={styles.stockTicker}>GOTO</Text>
                    </View>

                    {/* Apple Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <LogoPlaceholder />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-down-right" size={14} color="#E53935" />
                                <Text style={[styles.cardDeltaText, { color: '#E53935' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Apple Inc</Text>
                        <Text style={styles.stockTicker}>AAPL</Text>
                    </View>

                </View>
                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
    },
    headerTitle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
    },
    container: {
        flex: 1,
    },
    assetHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    assetTicker: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
    },
    assetPrice: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 36,
        fontWeight: '800',
        color: '#000',
        letterSpacing: -1,
        marginBottom: 4,
    },
    assetDeltaNum: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '500',
    },
    assetPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    assetPillText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginRight: 4,
    },
    pillIcon: {
        marginRight: 4,
    },
    pillPercent: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    chartContainer: {
        height: 180,
        position: 'relative',
        borderBottomWidth: 1,
        borderColor: '#EFEFEF',
        marginBottom: 32,
    },
    chartTooltip: {
        position: 'absolute',
        top: 5,
        left: '52%',
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
    },
    tooltipText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '600',
    },
    sectionTitle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        paddingHorizontal: 24,
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    stockCard: {
        width: '48%',
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
    },
    cardHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    brandIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0E0E0', // Flat grey placeholder
    },
    cardDeltaRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardDeltaText: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 2,
    },
    stockName: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    stockTicker: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 12,
        color: '#999',
        marginBottom: 16,
    },
    facesRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    faceStack: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F9F9F9',
    },
    socialProofText: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 12,
        color: '#888',
        lineHeight: 16,
    },
});
