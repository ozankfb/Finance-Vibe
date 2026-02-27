import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS, FONT_FAMILY } from '../theme';

type Suggestion = {
  name: string;
  role: string;
  image: ImageSourcePropType;
};

type Community = {
  name: string;
  image: ImageSourcePropType;
  description?: string;
  facesImage?: ImageSourcePropType;
};

const SUGGESTIONS: Suggestion[] = [
  { name: 'Peter Parker', role: 'Founder Matria', image: require('../../assets/avatars/peter.png') },
  { name: 'Jackson Ford', role: 'Founder Matria', image: require('../../assets/avatars/jackson.png') },
  { name: 'Sam Batesh', role: 'Investor', image: require('../../assets/avatars/sam.png') },
  { name: 'Michele Yuah', role: 'Founder Globe', image: require('../../assets/avatars/michele.png') },
];

const COMMUNITIES: Community[] = [
  {
    name: 'Bloomberg Top',
    image: require('../../assets/communities/bloomberg.png'),
    description: 'Investor community from the United States to share the latest news about anything.',
    facesImage: require('../../assets/facestacks/faces_50plus.png'),
  },
  {
    name: 'Mirae Circle',
    image: require('../../assets/communities/mirae.png'),
  },
];

const SuggestionItem = memo(function SuggestionItem({ name, role, image }: Suggestion) {
  return (
    <View style={styles.suggestionRow}>
      <Image source={image} style={styles.avatar} />
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
});

const CommunityCard = memo(function CommunityCard({ name, image, description, facesImage }: Community) {
  return (
    <View style={styles.communityCard}>
      <View style={styles.communityHeader}>
        <Image source={image} style={styles.communityAvatar} />
        <View style={styles.communityInfo}>
          <Text style={styles.communityName}>{name}</Text>
          <Text style={styles.communityType}>Community</Text>
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="users" size={14} color="#666" style={styles.actionIcon} />
          <Text style={styles.actionText}>Join</Text>
        </TouchableOpacity>
      </View>
      {description ? <Text style={styles.communityDescription}>{description}</Text> : null}
      {facesImage ? (
        <View style={styles.facesRow}>
          <Image source={facesImage} style={styles.facesImage} />
        </View>
      ) : null}
    </View>
  );
});

export function TimelineScreen() {
  const [activeTab, setActiveTab] = useState<'Following' | 'News'>('Following');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Timeline</Text>
        <TouchableOpacity>
          <Feather name="bell" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView bounces={false} style={styles.container} showsVerticalScrollIndicator={false}>
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

        <Text style={styles.sectionTitle}>Suggestions</Text>
        {SUGGESTIONS.map((item) => (
          <SuggestionItem key={item.name} {...item} />
        ))}

        <Text style={styles.sectionTitle}>Communities</Text>
        {COMMUNITIES.map((community, index) => (
          <View key={community.name} style={index === COMMUNITIES.length - 1 ? styles.lastCommunitySpacing : undefined}>
            <CommunityCard {...community} />
          </View>
        ))}
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
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceMuted,
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
    backgroundColor: COLORS.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  segmentText: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  segmentTextActive: {
    fontWeight: '600',
  },
  sectionTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
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
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  suggestionRole: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    color: '#888',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceMuted,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  actionIcon: {
    marginRight: 6,
  },
  actionText: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
  communityCard: {
    backgroundColor: COLORS.surfaceLight,
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
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  communityType: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    color: '#888',
  },
  communityDescription: {
    fontFamily: FONT_FAMILY,
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.textPrimary,
    marginTop: 16,
    marginBottom: 16,
  },
  facesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facesImage: {
    width: 130,
    height: 40,
    resizeMode: 'contain',
  },
  lastCommunitySpacing: {
    marginBottom: 40,
  },
});
