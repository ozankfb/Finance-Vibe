import React, { memo } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, ImageSourcePropType } from 'react-native';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import { Button, Title } from '../components';
import { COLORS, FONT_FAMILY } from '../theme';

type Transfer = {
  name: string;
  image: ImageSourcePropType;
};

type Portfolio = {
  name: string;
  ticker: string;
  value: string;
  returnPct: string;
  image: ImageSourcePropType;
};

const TRANSFERS: Transfer[] = [
  { name: 'Kendrick', image: require('../../assets/avatars/peter.png') },
  { name: 'Sabrina', image: require('../../assets/avatars/michele.png') },
  { name: 'Brandon', image: require('../../assets/avatars/jackson.png') },
  { name: 'Clement', image: require('../../assets/avatars/sam.png') },
];

const PORTFOLIO_ITEMS: Portfolio[] = [
  { name: 'Apple Inc', ticker: 'AAPL', value: '$5,113.72', returnPct: '8.03%', image: require('../../assets/apple.png') },
  { name: 'Tesla Inc', ticker: 'TSLA', value: '$2,118.42', returnPct: '4.20%', image: require('../../assets/tesla.png') },
  { name: 'Uber Inc', ticker: 'UBER', value: '$8,131.27', returnPct: '8.03%', image: require('../../assets/goto.png') },
];

const TransferItem = memo(function TransferItem({ name, image }: Transfer) {
  return (
    <View style={styles.transferItem}>
      <Image source={image} style={styles.avatarPlaceholder} />
      <Text style={styles.transferName}>{name}</Text>
    </View>
  );
});

const PortfolioItem = memo(function PortfolioItem({ name, ticker, value, returnPct, image }: Portfolio) {
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
});

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} bounces={false}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logoMark} />
            <Title style={styles.logoText}>Swiftz</Title>
          </View>
          <TouchableOpacity>
            <Feather name="bell" size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.balanceLabel}>Total Asset</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceValue}>$45,823.12</Text>
          <View style={styles.lockIconContainer}>
            <AntDesign name="lock" size={16} color={COLORS.textPrimary} />
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Feather name="arrow-up" size={16} color={COLORS.textPrimary} />
            </View>
            <View>
              <Text style={styles.statLabel}>Investment</Text>
              <Text style={styles.statValue}>$12,440.17</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Feather name="arrow-down" size={16} color={COLORS.textPrimary} />
            </View>
            <View>
              <Text style={styles.statLabel}>Profit Return</Text>
              <Text style={styles.statValue}>$32,230.18</Text>
            </View>
          </View>
        </View>

        <View style={styles.depositContainer}>
          <Button title="Deposit" />
        </View>

        <Title style={styles.sectionTitle}>Transfer</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.transferScroll}>
          <View style={styles.transferItem}>
            <TouchableOpacity style={styles.addTransferButton}>
              <Entypo name="plus" size={24} color={COLORS.textPrimary} />
            </TouchableOpacity>
            <Text style={styles.transferName}>Add</Text>
          </View>
          {TRANSFERS.map((item) => (
            <TransferItem key={item.name} {...item} />
          ))}
        </ScrollView>

        <Title style={styles.sectionTitle}>Portfolio</Title>
        <View style={styles.portfolioCard}>
          {PORTFOLIO_ITEMS.map((item, index) => (
            <View key={item.ticker}>
              <PortfolioItem {...item} />
              {index < PORTFOLIO_ITEMS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    borderColor: COLORS.accent,
    marginRight: 8,
  },
  logoText: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  balanceLabel: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    color: COLORS.textPrimary,
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
    fontFamily: FONT_FAMILY,
    fontSize: 44,
    fontWeight: '500',
    color: COLORS.textPrimary,
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
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  statLabel: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    color: COLORS.textTertiary,
    marginBottom: 4,
  },
  statValue: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  depositContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.textPrimary,
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
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  portfolioCard: {
    marginHorizontal: 24,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 20,
    padding: 20,
    marginBottom: 100,
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
    backgroundColor: COLORS.background,
  },
  portfolioTextCol: {
    flex: 1,
  },
  portfolioName: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  portfolioTicker: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    color: COLORS.textTertiary,
  },
  portfolioValueCol: {
    alignItems: 'flex-end',
  },
  portfolioValue: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  portfolioReturn: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    color: COLORS.positive,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 16,
  },
});
