import React, { memo } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MarketChart from '../components/MarketChart';
import { COLORS, FONT_FAMILY } from '../theme';

type Stock = {
  name: string;
  ticker: string;
  image: ImageSourcePropType;
  trend: 'up' | 'down';
  socialProofImage?: ImageSourcePropType;
};

const STOCKS: Stock[] = [
  {
    name: 'Tesla Inc',
    ticker: 'TSLA',
    image: require('../../assets/tesla.png'),
    trend: 'down',
    socialProofImage: require('../../assets/facestacks/faces_1.png'),
  },
  {
    name: 'Microsoft Inc',
    ticker: 'MSFT',
    image: require('../../assets/microsoft.png'),
    trend: 'up',
    socialProofImage: require('../../assets/facestacks/faces_2.png'),
  },
  {
    name: 'Gojek Tokopedia Tbk',
    ticker: 'GOTO',
    image: require('../../assets/goto.png'),
    trend: 'up',
  },
  {
    name: 'Apple Inc',
    ticker: 'AAPL',
    image: require('../../assets/apple.png'),
    trend: 'down',
  },
];

const StockCard = memo(function StockCard({ name, ticker, image, trend, socialProofImage }: Stock) {
  const isPositive = trend === 'up';
  const trendColor = isPositive ? COLORS.positive : COLORS.negative;

  return (
    <View style={styles.stockCard}>
      <View style={styles.cardHeaderRow}>
        <Image source={image} style={styles.brandIcon} />
        <View style={styles.cardDeltaRow}>
          <Feather name={isPositive ? 'arrow-up-right' : 'arrow-down-right'} size={14} color={trendColor} />
          <Text style={[styles.cardDeltaText, { color: trendColor }]}>2.03%</Text>
        </View>
      </View>
      <Text style={styles.stockName}>{name}</Text>
      <Text style={styles.stockTicker}>{ticker}</Text>
      {socialProofImage ? (
        <>
          <View style={styles.facesRow}>
            <Image source={socialProofImage} style={styles.socialProofImage} />
          </View>
          <Text style={styles.socialProofText}>Your friends invested in this company</Text>
        </>
      ) : null}
    </View>
  );
});

export function MarketScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
        <TouchableOpacity>
          <Feather name="bell" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView bounces={false} style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.assetHeaderRow}>
          <View>
            <Text style={styles.assetTicker}>NVDA</Text>
            <Text style={styles.assetPrice}>$ 104,86</Text>
            <Text style={styles.assetDeltaNum}>+532</Text>
          </View>
          <View style={styles.assetPill}>
            <Text style={styles.assetPillText}>NVDA</Text>
            <Feather name="arrow-up-right" size={14} color={COLORS.positive} style={styles.pillIcon} />
            <Text style={styles.pillPercent}>2.03%</Text>
          </View>
        </View>

        <View style={styles.chartContainer}>
          <MarketChart width="100%" height="100%" />
        </View>

        <Text style={styles.sectionTitle}>Stocks</Text>
        <View style={styles.gridContainer}>
          {STOCKS.map((stock) => (
            <StockCard key={stock.ticker} {...stock} />
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
    paddingBottom: 24,
  },
  headerTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
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
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  assetPrice: {
    fontFamily: FONT_FAMILY,
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.textPrimary,
    letterSpacing: -1,
    marginBottom: 4,
  },
  assetDeltaNum: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    color: COLORS.positive,
    fontWeight: '500',
  },
  assetPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
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
    color: COLORS.textPrimary,
    marginRight: 4,
  },
  pillIcon: {
    marginRight: 4,
  },
  pillPercent: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  chartContainer: {
    height: 180,
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
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
    backgroundColor: COLORS.surfaceLight,
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
    backgroundColor: COLORS.background,
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
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  stockTicker: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    color: COLORS.textTertiary,
    marginBottom: 16,
  },
  facesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  socialProofImage: {
    width: 55,
    height: 25,
    resizeMode: 'contain',
  },
  socialProofText: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    color: '#888',
    lineHeight: 16,
  },
  bottomSpacer: {
    height: 40,
  },
});
