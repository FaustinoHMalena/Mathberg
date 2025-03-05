// components/TopicCard.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import ProgressBar from './ProgressBar';

const TopicCard = ({ 
  title, 
  grade, 
  progress, 
  isLocked, 
  onPress 
}: {
  title: string;
  grade: string;
  progress: number;
  isLocked: boolean;
  onPress: () => void;
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLocked}
      style={[styles.container, { 
        backgroundColor: colors.card,
        opacity: isLocked ? 0.6 : 1
      }]}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.grade, { color: colors.primary }]}>{grade}</Text>
      </View>
      
      {!isLocked && (
        <ProgressBar 
          progress={progress} 
          color={colors.primary}
          style={styles.progress}
        />
      )}
      
      {isLocked && (
        <Text style={[styles.locked, { color: colors.text }]}>Locked</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  textContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  grade: {
    fontSize: 14,
    marginTop: 4,
  },
  progress: {
    height: 8,
  },
  locked: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default TopicCard;
