import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Title } from '../components/Title';
import { Button } from '../components/Button';

export function ProfileScreen() {

    const renderAvatar = (source: any) => {
        if (!source) {
            return (
                <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarInitial}>OK</Text>
                </View>
            );
        }

        return <Image source={source} style={styles.avatarImage} />;
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Title style={styles.screenTitle}>Profile</Title>
                <TouchableOpacity>
                    <Feather name="bell" size={24} color="#000000" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.container} bounces={false}>
                {/* 2) Top Profile Card */}
                <View style={styles.profileCard}>
                    <View style={styles.profileInfoContainer}>
                        {renderAvatar(require('../../assets/avatars/michele.png'))}
                        <View style={styles.profileTextCol}>
                            <Text style={styles.profileName}>Ozan</Text>
                            <Text style={styles.profileSubtitle}>Multidisciplinary Designer</Text>
                        </View>
                        <TouchableOpacity style={styles.editPill}>
                            <Feather name="edit-2" size={16} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 3) Stats Row */}
                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Total Assets</Text>
                        <Text style={styles.statValue}>$45,823</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Profit</Text>
                        <Text style={[styles.statValue, { color: '#A8E063' }]}>+ $532</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Watchlist</Text>
                        <Text style={styles.statValue}>12</Text>
                    </View>
                </View>

                {/* 4) Settings section */}
                <Text style={styles.sectionHeading}>Settings</Text>
                <View style={styles.settingsList}>
                    <TouchableOpacity style={styles.settingsItem}>
                        <View style={styles.settingsIconContainer}>
                            <Feather name="bell" size={20} color="#000" />
                        </View>
                        <View style={styles.settingsTextCol}>
                            <Text style={styles.settingsLabel}>Notifications</Text>
                        </View>
                        <Feather name="chevron-right" size={20} color="#999" />
                    </TouchableOpacity>
                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.settingsItem}>
                        <View style={styles.settingsIconContainer}>
                            <Feather name="lock" size={20} color="#000" />
                        </View>
                        <View style={styles.settingsTextCol}>
                            <Text style={styles.settingsLabel}>Security</Text>
                        </View>
                        <Feather name="chevron-right" size={20} color="#999" />
                    </TouchableOpacity>
                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.settingsItem}>
                        <View style={styles.settingsIconContainer}>
                            <Feather name="credit-card" size={20} color="#000" />
                        </View>
                        <View style={styles.settingsTextCol}>
                            <Text style={styles.settingsLabel}>Payment Methods</Text>
                        </View>
                        <Feather name="chevron-right" size={20} color="#999" />
                    </TouchableOpacity>
                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.settingsItem}>
                        <View style={styles.settingsIconContainer}>
                            <Feather name="help-circle" size={20} color="#000" />
                        </View>
                        <View style={styles.settingsTextCol}>
                            <Text style={styles.settingsLabel}>Help</Text>
                        </View>
                        <Feather name="chevron-right" size={20} color="#999" />
                    </TouchableOpacity>
                </View>

                {/* 5) Logout CTA */}
                <View style={styles.logoutContainer}>
                    <Button title="Log out" variant="secondary" />
                </View>

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
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 8,
    },
    screenTitle: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 36,
        lineHeight: 46,
        letterSpacing: -0.16,
        color: '#000000',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    profileCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 24,
        padding: 24,
        marginTop: 16,
        marginBottom: 16,
    },
    profileInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarImage: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#EAEAEA',
    },
    avatarPlaceholder: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarInitial: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    profileTextCol: {
        flex: 1,
        marginLeft: 16,
    },
    profileName: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 20,
        color: '#000000',
        marginBottom: 4,
    },
    profileSubtitle: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 25,
        letterSpacing: -0.16,
        color: '#777777',
    },
    editPill: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
        gap: 8,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        alignItems: 'center',
    },
    statLabel: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '400',
        fontSize: 14,
        color: '#777777',
        marginBottom: 8,
    },
    statValue: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 18,
        color: '#000000',
    },
    sectionHeading: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0,
        color: '#000000',
        marginBottom: 16,
    },
    settingsList: {
        backgroundColor: '#F5F5F5',
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    settingsIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    settingsTextCol: {
        flex: 1,
    },
    settingsLabel: {
        fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
        fontWeight: '500',
        fontSize: 16,
        color: '#000000',
    },
    divider: {
        height: 1,
        backgroundColor: '#EAEAEA',
        marginLeft: 52, // Align with text
    },
    logoutContainer: {
        marginTop: 40,
        marginBottom: 24,
    },
});
