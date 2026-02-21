import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import { Button } from '../components';

const COUNTRIES = [
    { id: '1', name: 'Germany', code: 'DE', flag: '🇩🇪' },
    { id: '2', name: 'Australia', code: 'AU', flag: '🇦🇺' },
    { id: '3', name: 'Indonesia', code: 'ID', flag: '🇮🇩' },
    { id: '4', name: 'United States', code: 'US', flag: '🇺🇸' },
    { id: '5', name: 'Japan', code: 'JP', flag: '🇯🇵' },
];

export function PhoneScreen({ onBack, onNext }: { onBack: () => void; onNext?: () => void }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedId, setSelectedId] = useState('4'); // US selected by default per reference

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={onBack}>
                        <Entypo name="chevron-left" size={24} color="#000" />
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.nextButtonSmall, !selectedId && styles.nextButtonDisabled]}
                        onPress={onNext}
                        disabled={!selectedId}
                    >
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                </View>

                {/* Title */}
                <Text style={styles.title}>Select your country</Text>
                <Text style={styles.subtitle}>We will provide the most relevant info.</Text>

                {/* Search Input */}
                <View style={styles.searchContainer}>
                    <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        placeholderTextColor="#999"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        selectionColor="#95E955"
                    />
                </View>

                {/* List */}
                <View style={styles.listCard}>
                    <ScrollView bounces={false} style={styles.scrollView}>
                        {COUNTRIES.map((country, index) => {
                            const isSelected = selectedId === country.id;
                            return (
                                <View key={country.id}>
                                    <TouchableOpacity
                                        style={styles.countryRow}
                                        onPress={() => setSelectedId(country.id)}
                                    >
                                        <Text style={styles.flagEmoji}>{country.flag}</Text>
                                        <Text style={styles.countryName}>{country.name}</Text>
                                        <View style={[styles.radio, isSelected && styles.radioSelected]}>
                                            {isSelected && <Entypo name="check" size={14} color="#000" />}
                                        </View>
                                    </TouchableOpacity>
                                    {index < COUNTRIES.length - 1 && <View style={styles.divider} />}
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F7',
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
        marginLeft: -8,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 18,
        color: '#000',
        marginLeft: -4,
    },
    nextButtonSmall: {
        backgroundColor: '#95E955',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
    },
    nextButtonDisabled: {
        opacity: 0.5,
    },
    nextText: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 34,
        fontWeight: '700',
        color: '#000',
        marginBottom: 8,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        color: '#8A8A8E',
        marginBottom: 24,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 16,
        height: 56,
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    searchIcon: {
        marginRight: 12,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        color: '#000',
    },
    listCard: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        overflow: 'hidden',
        flexShrink: 1,
    },
    scrollView: {
        flexGrow: 0,
    },
    countryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        height: 64,
    },
    flagEmoji: {
        fontSize: 20,
        marginRight: 12,
    },
    countryName: {
        flex: 1,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        color: '#000',
    },
    radio: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioSelected: {
        backgroundColor: '#95E955',
        borderColor: '#95E955',
    },
    divider: {
        height: 1,
        backgroundColor: '#F2F2F2',
        marginLeft: 48, // Aligned with text, skipping flag
    },
});
