import React, { memo, useCallback, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Title } from '../components/Title';
import { COLORS, FONT_FAMILY } from '../theme';

type Filter = 'All' | 'Stocks' | 'Crypto';

type Asset = {
  name: string;
  ticker: string;
  price: string;
  returnPos: string;
  image?: ImageSourcePropType;
  fallbackColor?: string;
  fallbackInitial?: string;
};

const FILTERS: Filter[] = ['All', 'Stocks', 'Crypto'];

const ASSETS: Asset[] = [
  { name: 'Apple Inc', ticker: 'AAPL', price: '$5,113.72', returnPos: '+8.03%', image: require('../../assets/apple.png') },
  { name: 'Tesla Inc', ticker: 'TSLA', price: '$2,118.42', returnPos: '+4.20%', image: require('../../assets/tesla.png') },
  { name: 'Uber Inc', ticker: 'UBER', price: '$8,131.27', returnPos: '+8.03%', image: require('../../assets/goto.png') },
  { name: 'Microsoft Inc', ticker: 'MSFT', price: '$3,220.10', returnPos: '+2.03%', image: require('../../assets/microsoft.png') },
  { name: 'Gojek Tokopedia', ticker: 'GOTO', price: '$1,020.55', returnPos: '+2.03%', image: require('../../assets/goto.png') },
  { name: 'NVDA', ticker: 'NVDA', price: '$104.86', returnPos: '+2.03%', fallbackColor: '#76B900', fallbackInitial: 'N' },
];

const AssetLogo = memo(function AssetLogo({ image, fallbackColor, fallbackInitial }: Pick<Asset, 'image' | 'fallbackColor' | 'fallbackInitial'>) {
  if (!image) {
    return (
      <View style={[styles.assetLogoFallback, { backgroundColor: fallbackColor || COLORS.textPrimary }]}> 
        <Text style={styles.assetLogoInitial}>{fallbackInitial || '?'}</Text>
      </View>
    );
  }

  return <Image source={image} style={styles.assetLogoImage} />;
});

const FilterPill = memo(function FilterPill({ label, isActive, onPress }: { label: Filter; isActive: boolean; onPress: (value: Filter) => void }) {
  return (
    <TouchableOpacity style={[styles.filterPill, isActive && styles.filterPillActive]} onPress={() => onPress(label)}>
      <Title style={[styles.filterText, isActive && styles.filterTextActive]}>{label}</Title>
    </TouchableOpacity>
  );
});

const AssetRow = memo(function AssetRow({ asset }: { asset: Asset }) {
  return (
    <View style={styles.listItem}>
      <AssetLogo image={asset.image} fallbackColor={asset.fallbackColor} fallbackInitial={asset.fallbackInitial} />
      <View style={styles.listTextCol}>
        <Title style={styles.listName}>{asset.name}</Title>
        <Title style={styles.listTicker}>{asset.ticker}</Title>
      </View>
      <View style={styles.listValueCol}>
        <Title style={styles.listPrice}>{asset.price}</Title>
        <Title style={styles.listReturnPos}>{asset.returnPos}</Title>
      </View>
    </View>
  );
});

export function PortfolioScreen() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const handleFilterPress = useCallback((value: Filter) => setActiveFilter(value), []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoMark} />
          <Title style={styles.logoText}>Swiftz</Title>
        </View>
        <TouchableOpacity>
          <Feather name="bell" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} bounces={false}>
        <Title style={styles.screenTitle}>Portfolio</Title>

        <View style={styles.filterRow}>
          {FILTERS.map((filter) => (
            <FilterPill key={filter} label={filter} isActive={activeFilter === filter} onPress={handleFilterPress} />
          ))}
        </View>

        <View style={styles.listCard}>
          {ASSETS.map((asset, index) => (
            <View key={asset.ticker + index}>
              <AssetRow asset={asset} />
              {index < ASSETS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    borderColor: COLORS.accent,
    marginRight: 8,
  },
  logoText: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  container: {
    flex: 1,
  },
  screenTitle: {
    fontFamily: FONT_FAMILY,
    fontWeight: '500',
    fontSize: 28,
    color: COLORS.textPrimary,
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
    backgroundColor: COLORS.surfaceMuted,
  },
  filterPillActive: {
    backgroundColor: COLORS.textPrimary,
  },
  filterText: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  filterTextActive: {
    color: COLORS.background,
  },
  listCard: {
    backgroundColor: COLORS.surfaceMuted,
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetLogoFallback: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  assetLogoInitial: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONT_FAMILY,
  },
  assetLogoImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    resizeMode: 'contain',
    backgroundColor: COLORS.background,
    marginRight: 16,
  },
  listTextCol: {
    flex: 1,
  },
  listName: {
    fontFamily: FONT_FAMILY,
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  listTicker: {
    fontFamily: FONT_FAMILY,
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  listValueCol: {
    alignItems: 'flex-end',
  },
  listPrice: {
    fontFamily: FONT_FAMILY,
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  listReturnPos: {
    fontFamily: FONT_FAMILY,
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.positive,
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 16,
  },
  bottomSpacer: {
    height: 100,
  },
});
