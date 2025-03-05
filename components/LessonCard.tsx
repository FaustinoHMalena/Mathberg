// components/LessonCard.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import ProgressBar from './ProgressBar';
import { MaterialIcons } from '@expo/vector-icons';

const LessonCard = ({ 
  title, 
  status, 
  progress, 
  onPress 
}: {
  title: string;
  status: 'locked' | 'unlocked' | 'completed';
  progress: number;
  onPress: () => void;
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={status === 'locked'}
      style={[styles.container, { 
        backgroundColor: colors.card,
        opacity: status === 'locked' ? 0.6 : 1
      }]}
    >
      <View style={styles.content}>
        <MaterialIcons
          name={status === 'completed' ? 'check-circle' : 'school'}
          size={24}
          color={status === 'completed' ? colors.primary : colors.text}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          {status !== 'locked' && (
            <ProgressBar 
              progress={progress * 100}
              color={colors.primary}
              style={styles.progress}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  progress: {
    height: 6,
  },
});

export default LessonCard;
