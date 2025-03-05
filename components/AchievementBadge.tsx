// components/AchievementBadge.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type BadgeProps = {
  name: string;
  unlocked: boolean;
};

const AchievementBadge = ({ name, unlocked }: BadgeProps) => {
  return (
    <View style={[styles.badge, { opacity: unlocked ? 1 : 0.4 }]}>
      <MaterialIcons 
        name={unlocked ? 'verified' : 'lock'} 
        size={32} 
        color={unlocked ? '#FFD700' : '#666'} 
      />
      <Text style={styles.badgeText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    margin: 8,
  },
  badgeText: {
    marginTop: 4,
    fontSize: 12,
    color: '#333',
  },
});

export default AchievementBadge;
