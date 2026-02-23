import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Svg, { SvgXml } from 'react-native-svg';
import { Image } from 'react-native';
import MarketChart from '../components/MarketChart';

export function MarketScreen() {

    // Real logos
    const logos = {
        tesla: require('../../assets/tesla.png'),
        microsoft: require('../../assets/microsoft.png'),
        goto: require('../../assets/goto.png'),
        apple: require('../../assets/apple.png'),
    };


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

                <View style={[styles.chartContainer]}>
                    <MarketChart width="100%" height="100%" />
                </View>

                {/* Stocks Grid Section */}
                <Text style={styles.sectionTitle}>Stocks</Text>
                <View style={styles.gridContainer}>

                    {/* Tesla Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <Image source={logos.tesla} style={styles.brandIcon} />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-down-right" size={14} color="#E53935" />
                                <Text style={[styles.cardDeltaText, { color: '#E53935' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Tesla Inc</Text>
                        <Text style={styles.stockTicker}>TSLA</Text>
                        <View style={styles.facesRow}>
                            <Image source={require('../../assets/facestacks/faces_1.png')} style={{ width: 55, height: 25, resizeMode: 'contain' }} />
                        </View>
                        <Text style={styles.socialProofText}>Your friends invested in this company</Text>
                    </View>

                    {/* Microsoft Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <Image source={logos.microsoft} style={styles.brandIcon} />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-up-right" size={14} color="#4CAF50" />
                                <Text style={[styles.cardDeltaText, { color: '#4CAF50' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Microsoft Inc</Text>
                        <Text style={styles.stockTicker}>MSFT</Text>
                        <View style={styles.facesRow}>
                            <Image source={require('../../assets/facestacks/faces_2.png')} style={{ width: 55, height: 25, resizeMode: 'contain' }} />
                        </View>
                        <Text style={styles.socialProofText}>Your friends invested in this company</Text>
                    </View>

                    {/* GoTo Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <Image source={logos.goto} style={styles.brandIcon} />
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
                            <Image source={logos.apple} style={styles.brandIcon} />
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
        backgroundColor: '#FFFFFF',
        resizeMode: 'contain',
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

    socialProofText: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 12,
        color: '#888',
        lineHeight: 16,
    },
});
