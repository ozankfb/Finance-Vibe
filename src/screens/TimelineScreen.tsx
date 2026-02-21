import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function TimelineScreen() {
    const [activeTab, setActiveTab] = useState('Following');

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Timeline</Text>
                <TouchableOpacity>
                    <Feather name="bell" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView bounces={false} style={styles.container} showsVerticalScrollIndicator={false}>
                {/* Segmented Control */}
                <View style={styles.segmentedControl}>
                    <TouchableOpacity
                        style={[styles.segment, activeTab === 'Following' && styles.segmentActive]}
                        onPress={() => setActiveTab('Following')}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.segmentText, activeTab === 'Following' && styles.segmentTextActive]}>Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.segment, activeTab === 'News' && styles.segmentActive]}
                        onPress={() => setActiveTab('News')}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.segmentText, activeTab === 'News' && styles.segmentTextActive]}>News</Text>
                    </TouchableOpacity>
                </View>

                {/* Suggestions */}
                <Text style={styles.sectionTitle}>Suggestions</Text>
                <SuggestionItem name="Peter Parker" role="Founder Matria" color="#8BA1B7" />
                <SuggestionItem name="Jackson Ford" role="Founder Matria" color="#D1D5D8" />
                <SuggestionItem name="Sam Batesh" role="Investor" color="#E7E7E7" />
                <SuggestionItem name="Michele Yuah" role="Founder Globe" color="#A0C4CC" />

                {/* Communities */}
                <Text style={styles.sectionTitle}>Communities</Text>

                {/* Bloomberg Top Card */}
                <View style={styles.communityCard}>
                    <View style={styles.communityHeader}>
                        <View style={[styles.communityAvatar, { backgroundColor: '#E65100' }]} />
                        <View style={styles.communityInfo}>
                            <Text style={styles.communityName}>Bloomberg Top</Text>
                            <Text style={styles.communityType}>Community</Text>
                        </View>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name="users" size={14} color="#666" style={styles.actionIcon} />
                            <Text style={styles.actionText}>Join</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.communityDescription}>
                        Investor community from the United States to share the latest news about anything.
                    </Text>
                    <View style={styles.facesRow}>
                        <View style={[styles.faceStack, { backgroundColor: '#4CAF50', zIndex: 3 }]} />
                        <View style={[styles.faceStack, { backgroundColor: '#2196F3', zIndex: 2, marginLeft: -12 }]} />
                        <View style={[styles.faceStack, { backgroundColor: '#9C27B0', zIndex: 1, marginLeft: -12 }]} />
                        <View style={[styles.faceStack, { backgroundColor: '#000', zIndex: 0, marginLeft: -12, justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={styles.faceMoreText}>50+</Text>
                        </View>
                    </View>
                </View>

                {/* Mirae Circle Card */}
                <View style={[styles.communityCard, { marginBottom: 40 }]}>
                    <View style={styles.communityHeader}>
                        <View style={[styles.communityAvatar, { backgroundColor: '#C2185B' }]} />
                        <View style={styles.communityInfo}>
                            <Text style={styles.communityName}>Mirae Circle</Text>
                            <Text style={styles.communityType}>Community</Text>
                        </View>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name="users" size={14} color="#666" style={styles.actionIcon} />
                            <Text style={styles.actionText}>Join</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

function SuggestionItem({ name, role, color }: any) {
    return (
        <View style={styles.suggestionRow}>
            <View style={[styles.avatar, { backgroundColor: color }]} />
            <View style={styles.suggestionInfo}>
                <Text style={styles.suggestionName}>{name}</Text>
                <Text style={styles.suggestionRole}>{role}</Text>
            </View>
            <TouchableOpacity style={styles.actionButton}>
                <Feather name="user-plus" size={14} color="#666" style={styles.actionIcon} />
                <Text style={styles.actionText}>Add</Text>
            </TouchableOpacity>
        </View>
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
    segmentedControl: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        padding: 4,
        marginHorizontal: 24,
        marginBottom: 32,
        height: 52,
    },
    segment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    segmentActive: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    segmentText: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    segmentTextActive: {
        fontWeight: '600',
    },
    sectionTitle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        paddingHorizontal: 24,
        marginBottom: 20,
        marginTop: 8,
    },
    suggestionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        marginRight: 16,
    },
    suggestionInfo: {
        flex: 1,
    },
    suggestionName: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginBottom: 4,
    },
    suggestionRole: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 14,
        color: '#888',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    actionIcon: {
        marginRight: 6,
    },
    actionText: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 14,
        fontWeight: '500',
        color: '#444',
    },
    communityCard: {
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 24,
        marginBottom: 16,
    },
    communityHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    communityAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    communityInfo: {
        flex: 1,
    },
    communityName: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginBottom: 4,
    },
    communityType: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 14,
        color: '#888',
    },
    communityDescription: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 15,
        lineHeight: 22,
        color: '#000',
        marginTop: 16,
        marginBottom: 16,
    },
    facesRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    faceStack: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#F9F9F9',
    },
    faceMoreText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '600',
    }
});
