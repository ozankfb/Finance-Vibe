import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import { Button } from '../components';
import { Title } from '../components/Title';

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} bounces={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoMark} />
                        <Title style={styles.logoText}>Swiftz</Title>
                    </View>
                    <TouchableOpacity>
                        <Feather name="bell" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Balance Section */}
                <Text style={styles.balanceLabel}>Total Asset</Text>
                <View style={styles.balanceRow}>
                    <Text style={styles.balanceValue}>$45,823.12</Text>
                    <View style={styles.lockIconContainer}>
                        <AntDesign name="lock" size={16} color="#000" />
                    </View>
                </View>

                {/* Stats Cards */}
                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <View style={styles.statIconContainer}>
                            <Feather name="arrow-up" size={16} color="#000" />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Investment</Text>
                            <Text style={styles.statValue}>$12,440.17</Text>
                        </View>
                    </View>
                    <View style={styles.statCard}>
                        <View style={styles.statIconContainer}>
                            <Feather name="arrow-down" size={16} color="#000" />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Profit Return</Text>
                            <Text style={styles.statValue}>$32,230.18</Text>
                        </View>
                    </View>
                </View>

                {/* Deposit Button */}
                <View style={styles.depositContainer}>
                    <Button title="Deposit" />
                </View>

                {/* Transfer Section */}
                <Title style={styles.sectionTitle}>Transfer</Title>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.transferScroll}>
                    <View style={styles.transferItem}>
                        <TouchableOpacity style={styles.addTransferButton}>
                            <Entypo name="plus" size={24} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.transferName}>Add</Text>
                    </View>
                    {[
                        { name: 'Kendrick', image: require('../../assets/avatars/peter.png') },
                        { name: 'Sabrina', image: require('../../assets/avatars/michele.png') },
                        { name: 'Brandon', image: require('../../assets/avatars/jackson.png') },
                        { name: 'Clement', image: require('../../assets/avatars/sam.png') }
                    ].map((item, i) => (
                        <View key={i} style={styles.transferItem}>
                            <Image source={item.image} style={styles.avatarPlaceholder} />
                            <Text style={styles.transferName}>{item.name}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Portfolio Section */}
                <Title style={styles.sectionTitle}>Portfolio</Title>
                <View style={styles.portfolioCard}>
                    <PortfolioItem name="Apple Inc" ticker="AAPL" value="$5,113.72" returnPct="8.03%" image={require('../../assets/apple.png')} />
                    <View style={styles.divider} />
                    <PortfolioItem name="Tesla Inc" ticker="TSLA" value="$2,118.42" returnPct="4.20%" image={require('../../assets/tesla.png')} />
                    <View style={styles.divider} />
                    <PortfolioItem name="Uber Inc" ticker="UBER" value="$8,131.27" returnPct="8.03%" image={require('../../assets/goto.png')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function PortfolioItem({ name, ticker, value, returnPct, image }: any) {
    return (
        <View style={styles.portfolioItem}>
            <Image source={image} style={styles.brandIcon} />
            <View style={styles.portfolioTextCol}>
                <Text style={styles.portfolioName}>{name}</Text>
                <Text style={styles.portfolioTicker}>{ticker}</Text>
            </View>
            <View style={styles.portfolioValueCol}>
                <Text style={styles.portfolioValue}>{value}</Text>
                <Text style={styles.portfolioReturn}>↗ {returnPct}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
        marginBottom: 32,
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
        fontWeight: '500', // Changed from 700 to 500 Medium
        color: '#000',
    },
    balanceLabel: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 24,
        marginBottom: 8,
    },
    balanceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 32,
    },
    balanceValue: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 44,
        fontWeight: '500', // Changed to Medium
        color: '#000',
        letterSpacing: -1,
    },
    lockIconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F5F5F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
    },
    statsRow: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        gap: 16,
        marginBottom: 24,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    statLabel: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 12,
        color: '#999',
        marginBottom: 4,
    },
    statValue: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 16,
        fontWeight: '500', // Changed to Medium
        color: '#000',
    },
    depositContainer: {
        paddingHorizontal: 24,
        marginBottom: 32,
    },
    sectionTitle: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 18,
        fontWeight: '500', // Changed to Medium
        color: '#000',
        paddingHorizontal: 24,
        marginBottom: 16,
    },
    transferScroll: {
        paddingHorizontal: 24,
        marginBottom: 32,
    },
    transferItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    addTransferButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#F5F5F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatarPlaceholder: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginBottom: 8,
    },
    transferName: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 14,
        color: '#000',
        fontWeight: '500', // Changed to Medium
    },
    portfolioCard: {
        marginHorizontal: 24,
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        padding: 20,
        marginBottom: 100, // Pad for tab bar since inner scroll isn't used
    },
    portfolioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    brandIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
        resizeMode: 'contain',
        backgroundColor: '#FFF',
    },
    portfolioTextCol: {
        flex: 1,
    },
    portfolioName: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 16,
        fontWeight: '500', // Changed to Medium
        color: '#000',
        marginBottom: 4,
    },
    portfolioTicker: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 14,
        color: '#999',
    },
    portfolioValueCol: {
        alignItems: 'flex-end',
    },
    portfolioValue: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 16,
        fontWeight: '500', // Changed to Medium
        color: '#000',
        marginBottom: 4,
    },
    portfolioReturn: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '500', // Changed to Medium
    },
    divider: {
        height: 1,
        backgroundColor: '#EFEFEF',
        marginVertical: 16,
    },
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 85,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#EFEFEF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    },
});
