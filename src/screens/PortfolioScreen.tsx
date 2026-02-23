import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Title } from '../components/Title';

export function PortfolioScreen() {
    const [activeFilter, setActiveFilter] = useState('All');

    const renderAssetLogo = (source: any, size: number, defaultColor: string, defaultInitial: string) => {
        if (!source) {
            return (
                <View style={[{ width: size, height: size, borderRadius: size / 2, backgroundColor: defaultColor, justifyContent: 'center', alignItems: 'center', marginRight: 16 }]}>
                    <Title style={{ color: '#FFF', fontSize: 16, fontWeight: '500' }}>{defaultInitial}</Title>
                </View>
            );
        }

        return (
            <Image source={source} style={{ width: size, height: size, borderRadius: size / 2, resizeMode: 'contain', backgroundColor: '#FFF', marginRight: 16 }} />
        );
    }

    const FilterPill = ({ label }: { label: string }) => {
        const isActive = activeFilter === label;
        return (
            <TouchableOpacity
                style={[styles.filterPill, isActive && styles.filterPillActive]}
                onPress={() => setActiveFilter(label)}
            >
                <Title style={[styles.filterText, isActive && styles.filterTextActive]}>{label}</Title>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header row: left brand icon + "Swiftz", right bell icon */}
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoMark} />
                    <Title style={styles.logoText}>Swiftz</Title>
                </View>
                <TouchableOpacity>
                    <Feather name="bell" size={24} color="#000000" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.container} bounces={false}>
                {/* Large Title */}
                <Title style={styles.screenTitle}>Portfolio</Title>

                {/* Filter Pill Row */}
                <View style={styles.filterRow}>
                    <FilterPill label="All" />
                    <FilterPill label="Stocks" />
                    <FilterPill label="Crypto" />
                </View>

                {/* 6-item list row card */}
                <View style={styles.listCard}>
                    {/* Apple Inc */}
                    <View style={styles.listItem}>
                        {renderAssetLogo(require('../../assets/apple.png'), 48, '#000', 'A')}
                        <View style={styles.listTextCol}>
                            <Title style={styles.listName}>Apple Inc</Title>
                            <Title style={styles.listTicker}>AAPL</Title>
                        </View>
                        <View style={styles.listValueCol}>
                            <Title style={styles.listPrice}>$5,113.72</Title>
                            <Title style={styles.listReturnPos}>+8.03%</Title>
                        </View>
                    </View>
                    <View style={styles.divider} />

                    {/* Tesla Inc */}
                    <View style={styles.listItem}>
                        {renderAssetLogo(require('../../assets/tesla.png'), 48, '#E53935', 'T')}
                        <View style={styles.listTextCol}>
                            <Title style={styles.listName}>Tesla Inc</Title>
                            <Title style={styles.listTicker}>TSLA</Title>
                        </View>
                        <View style={styles.listValueCol}>
                            <Title style={styles.listPrice}>$2,118.42</Title>
                            <Title style={styles.listReturnPos}>+4.20%</Title>
                        </View>
                    </View>
                    <View style={styles.divider} />

                    {/* Uber Inc */}
                    <View style={styles.listItem}>
                        {renderAssetLogo(require('../../assets/goto.png'), 48, '#1E88E5', 'U')}
                        <View style={styles.listTextCol}>
                            <Title style={styles.listName}>Uber Inc</Title>
                            <Title style={styles.listTicker}>UBER</Title>
                        </View>
                        <View style={styles.listValueCol}>
                            <Title style={styles.listPrice}>$8,131.27</Title>
                            <Title style={styles.listReturnPos}>+8.03%</Title>
                        </View>
                    </View>
                    <View style={styles.divider} />

                    {/* Microsoft Inc */}
                    <View style={styles.listItem}>
                        {renderAssetLogo(require('../../assets/microsoft.png'), 48, '#00A4EF', 'M')}
                        <View style={styles.listTextCol}>
                            <Title style={styles.listName}>Microsoft Inc</Title>
                            <Title style={styles.listTicker}>MSFT</Title>
                        </View>
                        <View style={styles.listValueCol}>
                            <Title style={styles.listPrice}>$3,220.10</Title>
                            <Title style={styles.listReturnPos}>+2.03%</Title>
                        </View>
                    </View>
                    <View style={styles.divider} />

                    {/* Gojek Tokopedia */}
                    <View style={styles.listItem}>
                        {renderAssetLogo(require('../../assets/goto.png'), 48, '#00AA13', 'G')}
                        <View style={styles.listTextCol}>
                            <Title style={styles.listName}>Gojek Tokopedia</Title>
                            <Title style={styles.listTicker}>GOTO</Title>
                        </View>
                        <View style={styles.listValueCol}>
                            <Title style={styles.listPrice}>$1,020.55</Title>
                            <Title style={styles.listReturnPos}>+2.03%</Title>
                        </View>
                    </View>
                    <View style={styles.divider} />

                    {/* NVDA */}
                    <View style={styles.listItem}>
                        {renderAssetLogo(null, 48, '#76B900', 'N')}
                        <View style={styles.listTextCol}>
                            <Title style={styles.listName}>NVDA</Title>
                            <Title style={styles.listTicker}>NVDA</Title>
                        </View>
                        <View style={styles.listValueCol}>
                            <Title style={styles.listPrice}>$104.86</Title>
                            <Title style={styles.listReturnPos}>+2.03%</Title>
                        </View>
                    </View>
                </View>

                {/* Bottom spacer for tab bar */}
                <View style={{ height: 100 }} />
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
        paddingBottom: 8,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoMark: {
        width: 20,
        height: 20,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#95E955',
        marginRight: 8,
    },
    logoText: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
    },
    container: {
        flex: 1,
    },
    screenTitle: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 28, // Using 28 to match typical 'large title' metrics for full pages in Swiftz without dominating the top area
        color: '#000000',
        paddingHorizontal: 24,
        marginTop: 16,
        marginBottom: 24,
    },
    filterRow: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginBottom: 24,
        gap: 12,
    },
    filterPill: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    filterPillActive: {
        backgroundColor: '#000000',
    },
    filterText: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 14,
        fontWeight: '500',
        color: '#777777',
    },
    filterTextActive: {
        color: '#FFFFFF',
    },
    listCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 24,
        padding: 20,
        marginHorizontal: 24,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listTextCol: {
        flex: 1,
    },
    listName: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 16,
        color: '#000000',
        marginBottom: 4,
    },
    listTicker: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '400',
        fontSize: 14,
        color: '#777777',
    },
    listValueCol: {
        alignItems: 'flex-end',
    },
    listPrice: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 16,
        color: '#000000',
        marginBottom: 4,
    },
    listReturnPos: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 14,
        color: '#4CAF50',
    },
    divider: {
        height: 1,
        backgroundColor: '#EAEAEA',
        marginVertical: 16,
    },
});
